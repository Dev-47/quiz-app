export default function Footer() {
  return (
    <footer className="text-black flex justify-between place-items-center px-8">
      <a href="https://github.com/dev-47">
        <div className="logo m-4">
          <span className="text-[#e01936] text-2xl">DEV &nbsp;</span>
          <span className="text-[#026294] text-2xl">47</span>
        </div>
      </a>

      <h3 className="text-[#48768f] text-lg sm:p-5">
        {" "}
        Copyright &copy; {new Date().getFullYear()}{" "}
      </h3>
    </footer>
  );
}
