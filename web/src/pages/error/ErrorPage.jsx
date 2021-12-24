export default function ErrorPage() {
    return (
        <div className="flex place-content-center place-items-center text-red-600 text-xl border-4 border-red-50">
            this page doesn't exit on this domain <br />
            <Link to="/">Go to Home Page</Link>
        </div>
    )
}
