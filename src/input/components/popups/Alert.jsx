export default function Alert({active, content}) {
    return (
        <div className={"alert alert-danger rounded-0 fs-5 bs-override-alert" + (active ? " active" : "")}>
            {content}
        </div>
    )
}
