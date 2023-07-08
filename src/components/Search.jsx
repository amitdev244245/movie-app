import { useGlobalContext } from "../context";

export default function Search() {
    const { setQuery, isError } = useGlobalContext();
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 pt-3 mx-auto">
                        <form className="d-flex" onSubmit={(e) => { e.preventDefault() }}>
                            <input type="text" className="form-control me-2" name="search" placeholder="Search" onChange={(e) => { setQuery(e.target.value) }} />
                        </form>
                        <p className="text-danger ps-1">{isError.show && isError.msg}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
