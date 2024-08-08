// noinspection TypeScriptValidateTypes
// noinspection TypeScriptValidateTypes

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input.tsx'
import { Button } from '@/components/ui/button.tsx'
import { Link } from 'react-router-dom'
import { Separator } from '@/components/ui/separator.tsx'
import { signIn } from '@/api/user/sign-in.ts'
import { toast } from 'sonner'
import { useContext } from 'react'
import { GlobalContext } from '@/contexts/global-context.tsx'

const signSchema = z.object({
  email: z.string().min(3, { message: `Mínimo de 3 caracteres.` }),
  password: z.string().min(3, { message: `Mínimo de 3 caracteres.` }),
})

export interface ISignInSchema extends z.infer<typeof signSchema> {}

export function SignIn() {
  const { handleSetToken, handleNavigate } = useContext(GlobalContext)

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ISignInSchema>({
    resolver: zodResolver(signSchema),
  })

  async function handleSignIn(data: ISignInSchema) {
    try {
      const token = await signIn(data)
      handleSetToken(token)
      toast.success('Usuário logado com sucesso!')

      setTimeout(() => {
        handleNavigate('/')
      }, 1000)
    } catch (e) {
      if (e instanceof Error) {
        toast.error(e.message)
        return
      }

      toast.error('Erro interno do servidor')
    }
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
            {...register('email')}
            id={'email'}
            placeholder={'Digite seu nome..'}
          />
          {errors.email && (
            <span className={'text-rose-700'}>{errors.email.message}</span>
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

        <Button className={' mt-4'}>Entrar</Button>
      </form>

      <Separator className={'w-6 m-auto'} />

      <div
        className={
          'w-full  flex flex-col justify-center items-center mt-4 gap-4'
        }
      >
        <p className={'text-md font-semibold'}>Não possui conta?</p>
        <Link to={'/sign-up'}>
          <Button variant={'outline'}>Criar Conta</Button>
        </Link>
      </div>
    </div>
  )
}
