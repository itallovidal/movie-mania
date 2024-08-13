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
import { signUp } from '@/api/user/sign-up.ts'
import { toast } from 'sonner'
import { useContext, useState } from 'react'
import { GlobalContext } from '@/contexts/global-context.tsx'
import { MovieContext } from '@/contexts/movie-context.tsx'

const signUpSchema = z
  .object({
    email: z.string().min(3, { message: `Mínimo de 3 caracteres.` }),
    username: z.string().min(3, { message: `Mínimo de 3 caracteres.` }),
    password: z.string().min(3, { message: `Mínimo de 3 caracteres.` }),
    favoriteGenre1: z.string(),
    favoriteGenre2: z.string(),
  })
  .refine(
    ({ favoriteGenre1, favoriteGenre2 }) => favoriteGenre1 !== favoriteGenre2,
    {
      message: 'Os gêneros devem ser diferentes.',
      path: ['favoriteGenre1'],
    },
  )

export interface ISignUpSchema extends z.infer<typeof signUpSchema> {}

export function SignUp() {
  const [isLoading, setIsLoading] = useState(false)
  const { handleNavigate } = useContext(GlobalContext)
  const { genreList } = useContext(MovieContext)
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<ISignUpSchema>({
    resolver: zodResolver(signUpSchema),
  })

  async function handleSignIn(data: ISignUpSchema) {
    setIsLoading(true)
    try {
      await signUp(data)
      toast.success('Bem vindo!')
      setTimeout(() => {
        toast.success('Faça o login com sua nova conta!')
        handleNavigate('/sign-in')
      }, 1000)
    } catch (e) {
      toast.success(e.message)
      setIsLoading(false)
    }
  }

  return (
    <div className={'animate-showing-up grid place-content-center'}>
      <form
        className={'min-w-80 gap-6 flex flex-col mb-4 '}
        onSubmit={handleSubmit(handleSignIn)}
      >
        <h1 className={'font-josefin mt-4 text-4xl text-center'}>MovieMania</h1>

        <div className={'flex flex-col gap-2'}>
          <p className={'text-lg font-semibold font-roboto'}>Email</p>
          <Input
            {...register('email')}
            id={'email'}
            placeholder={'Digite seu nome..'}
          />
          {errors.email && (
            <span className={'text-rose-700'}>{errors.email.message}</span>
          )}
        </div>

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
                    {genreList &&
                      genreList.map((genre) => {
                        return (
                          <SelectItem
                            className={'cursor-pointer'}
                            value={genre.id.toString()}
                          >
                            {genre.name}
                          </SelectItem>
                        )
                      })}
                  </SelectContent>
                </Select>
              )
            }}
            name={'favoriteGenre1'}
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
                    {genreList &&
                      genreList.map((genre) => {
                        return (
                          <SelectItem
                            className={'cursor-pointer'}
                            value={genre.id.toString()}
                          >
                            {genre.name}
                          </SelectItem>
                        )
                      })}
                  </SelectContent>
                </Select>
              )
            }}
            name={'favoriteGenre2'}
          />

          {(errors.favoriteGenre1 || errors.favoriteGenre2) && (
            <span className={'text-rose-700'}>
              {errors.favoriteGenre1?.message}
            </span>
          )}
        </div>

        <Button disabled={isLoading} className={' mt-4'}>
          Cadastrar
        </Button>
      </form>

      <Separator className={'w-6 m-auto'} />

      <div
        className={
          'w-full  flex flex-col justify-center items-center mt-4 gap-4'
        }
      >
        <p className={'text-md font-semibold'}>Você já é cadastrado?</p>
        <Button disabled={isLoading} variant={'outline'}>
          <Link to={'/sign-in'}></Link>
          Entrar
        </Button>
      </div>
    </div>
  )
}
