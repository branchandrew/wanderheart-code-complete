import Logo from "@/components/Logo"

export default function Footer() {
  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center max-w-7xl">
        <div className="mb-6 md:mb-0">
          <Logo className="text-white" width={200} height={41} />
        </div>
        <div>
          <p className="text-[#9697db]">© 2025 Wanderheart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
