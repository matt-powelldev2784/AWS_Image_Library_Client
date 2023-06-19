import { SearchInput } from '../ui/ui-index'
import { useNavigate } from 'react-router-dom'

export const SecondaryNav = () => {
  const navigate = useNavigate()

  const handleNavigateClick = (route: string) => {
    navigate(route)
  }

  return (
    <nav className="relative z-50 flex h-fit w-full min-w-[320px] flex-wrap items-center justify-center bg-primaryGreen/75 md:justify-between">
      <div className="z-20 flex w-11/12 flex-col items-center justify-center md:m-3 md:ml-2 md:w-1/2 md:flex-row">
        <img
          className="mb-2 ml-2 mt-2 hidden w-12 md:mr-2 md:block"
          src="/re_dry_flower_white.svg"
          alt="Redry logo"
        />
        <img
          className="mb-3 mt-2 h-8 md:mr-2 md:hidden"
          src="/re_dry_logo_whte_flower.svg"
          alt="Redry logo"
        />

        <SearchInput
          wrapperClassNames="mb-3 md:m-0"
          inputClassNames="w-full text-center md:pl-12 md:text-left min-w-[280px] p-1 md:p-2 rounded-xl text-left text-base outline-none border-2 border-white focus:border-darkBlack"
          placeholderText="Search Image Library"
        />
      </div>

      <div className="m-4 hidden flex-row gap-4 text-darkBlack md:z-10 md:mr-8 md:flex">
        <button
          className="p-1 px-2"
          onClick={() => handleNavigateClick('/upload-image')}
        >
          Developer API
        </button>
        <button
          className="rounded border-2 border-darkBlack p-1 px-2"
          onClick={() => handleNavigateClick('/upload-image')}
        >
          Upload Image
        </button>
      </div>
    </nav>
  )
}
