const toastErrorMessage = (props) => {
    return (
        <>
            {props.errors.map((error, i) => {
                return (
                    <div className="cleafix">{error}</div>
                )
            })}
        </>
    );
}
export default toastErrorMessage;