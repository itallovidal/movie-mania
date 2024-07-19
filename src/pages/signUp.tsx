// noinspection TypeScriptValidateTypes

import { z } from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input.tsx'
import { Button } from '@/components/ui/button.tsx'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select.tsx'
import { Link } from 'react-router-dom'
import { Separator } from '@/components/ui/separator.tsx'

const signUpSchema = z
  .object({
    username: z.string().min(3, { message: `Mínimo de 3 caracteres.` }),
    password: z.string().min(3, { message: `Mínimo de 3 caracteres.` }),
    favGenre1: z
      .number({
        required_error: 'Por favor escolhe o gênero favorito.',
      })
      .min(1),
    favGenre2: z.number().min(1),
  })
  .refine(
    ({ favGenre1, favGenre2 }) =>
      favGenre1 === favGenre2 && {
        message: 'Os gêneros devem ser diferentes.',
        path: ['favGenre1'],
      },
  )

export interface ISignUp extends z.infer<typeof signUpSchema> {}

export function SignUp() {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<ISignUp>({
    resolver: zodResolver(signUpSchema),
  })

  async function handleSignIn(data: ISignUp) {
    console.log(data)
  }

  return (
    <div className={'grid place-content-center'}>
      <form
        className={'min-w-80 gap-6 flex flex-col mb-4 '}
        onSubmit={handleSubmit(handleSignIn)}
      >
        <h1 className={'font-josefin mt-4 text-4xl text-center'}>MovieMania</h1>

        <div className={'flex flex-col gap-2'}>
          <p className={'text-lg font-semibold font-roboto'}>Nome</p>
          <Input
            {...register('username')}
            id={'username'}
            placeholder={'Digite seu nome..'}
          />
          {errors.username && (
            <span className={'text-rose-700'}>{errors.username.message}</span>
          )}
        </div>

        <div className={'flex flex-col gap-2'}>
          <p className={'text-lg font-semibold font-roboto'}>Senha</p>
          <Input
            {...register('password')}
            id={'password'}
            placeholder={'Digite sua senha..'}
          />
          {errors.password && (
            <span className={'text-rose-700'}>{errors.password.message}</span>
          )}
        </div>

        <div className={'flex flex-col gap-2'}>
          <p className={'text-lg font-semibold font-roboto'}>
            Gêneros favoritos
          </p>
          <Controller
            control={control}
            render={({ field: { name, value, onChange } }) => {
              return (
                <Select name={name} value={value} onValueChange={onChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Primeiro Gênero Favorito" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem className={'cursor-pointer'} value="light">
                      Light
                    </SelectItem>
                    <SelectItem className={'cursor-pointer'} value="dark">
                      Dark
                    </SelectItem>
                    <SelectItem className={'cursor-pointer'} value="system">
                      System
                    </SelectItem>
                  </SelectContent>
                </Select>
              )
            }}
            name={'favGenre1'}
          />

          <Controller
            control={control}
            render={({ field: { name, value, onChange } }) => {
              return (
                <Select name={name} value={value} onValueChange={onChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Segundo Gênero Favorito" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem className={'cursor-pointer'} value="light">
                      Light
                    </SelectItem>
                    <SelectItem className={'cursor-pointer'} value="dark">
                      Dark
                    </SelectItem>
                    <SelectItem className={'cursor-pointer'} value="system">
                      System
                    </SelectItem>
                  </SelectContent>
                </Select>
              )
            }}
            name={'favGenre2'}
          />

          {(errors.favGenre1 || errors.favGenre2) && (
            <span className={'text-rose-700'}>
              Escolha os seus gêneros favoritos.
            </span>
          )}
        </div>

        <Button className={' mt-4'}>Cadastrar</Button>
      </form>

      <Separator className={'w-6 m-auto'} />

      <div
        className={
          'w-full  flex flex-col justify-center items-center mt-4 gap-4'
        }
      >
        <p className={'text-md font-semibold'}>Você já é cadastrado?</p>
        <Link to={'sign-in'}>
          <Button variant={'outline'}>Entrar</Button>
        </Link>
      </div>
    </div>
  )
}
