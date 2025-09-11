export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container py-6 text-sm text-gray-600 flex flex-col md:flex-row gap-2 md:gap-0 md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Avishka Interiors. All rights reserved.</p>
        <p>📞 9029804944 · ✉️ avishkainteriors@gmail.com</p>
      </div>
    </footer>
  )
}
