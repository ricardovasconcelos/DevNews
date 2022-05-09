import { useRouter } from "next/router";
import { useCallback } from "react";

export function Layout({ children, title }) {
  const router = useRouter();

  const handleLogoClick = useCallback(() => {
    router.push('/');
  }, [])

  
  return (
    <div className="h-full min-h-screen relative">
      <header className="w-full h-72 bg-gray-900 rounded-b-[6.25rem] pt-11 px-32 flex justify-center items-center text-center">
        <img
          alt="Logo"
          src="/logofull.png"
          className="h-6 absolute left-[10%] top-10 cursor-pointer"
          onClick={handleLogoClick}
        />
        <h1 className="text-white text-4xl w-8/12">{title}</h1>
      </header>

      {children}

      <div className="pb-40" />
      <footer className="w-full h-28 absolute bottom-0 bg-gray-900 flex justify-center items-center">
        <div className="w-4/5 h-4/5 flex items-center flex-wrap">
          <hr className="w-full border-t border-[#00c1b2]"/>
          <h3 className="text-white font-light text-[16px]">Copyright DevNews © 2022 Todos os direitos reservados.</h3>
        </div>
      </footer>
    </div>
  );
}
