export default function SlidedownPopup({active, content}) {
    return (
        <div className={"slidedown-popup" + (active ? " active" : "")}>
            {content}
        </div>
    )
}
