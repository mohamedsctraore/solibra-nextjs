import SignInForm from './sign-in-form';
import AuthWrapperOne from '@/app/shared/auth-layout/auth-wrapper-one';
import Image from 'next/image';
import UnderlineShape from '@/components/shape/underline';
import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject('Sign In'),
};

export default function SignIn() {
  return (
    <AuthWrapperOne
      title={
        <>
          Bienvenue !{' '}
          <span className="relative inline-block">
            Sur votre plateforme
            <UnderlineShape className="absolute -bottom-2 start-0 h-2.5 w-24 text-blue md:w-28 xl:-bottom-1.5 xl:w-36" />
          </span>{' '}
           Whatsapp.
        </>
      }
      description="En vous inscrivant, vous aurez accès à du contenu exclusif, à des offres spéciales et serez le premier informé des nouvelles et mises à jour passionnantes."
      bannerTitle="Gérer efficacement vos campagnes Whatsapp."
      bannerDescription="Amet minim mollit non deserunt ullamco est sit aliqua dolor do
      amet sint velit officia consequat duis."
      isSocialLoginActive={true}
      pageImage={
        <div className="relative mx-auto aspect-[4/3.37] w-[500px] xl:w-[620px] 2xl:w-[820px]">
          <Image
            src={
              'https://res.cloudinary.com/yeswecange/image/upload/v1695692978/solibra/oqkeolm1ill5mlaytid7.jpg'
            }
            alt="Sign Up Thumbnail"
            fill
            priority
            sizes="(max-width: 768px) 100vw"
            className="object-cover"
          />
        </div>
      }
    >
      <SignInForm />
    </AuthWrapperOne>
  );
}
