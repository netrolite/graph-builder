export default function BrowsePalettesBtn({setShowPalettesPopup}) {
    function togglePalettesWindow() {
        setShowPalettesPopup(prevState => !prevState);
    }
    
    return (
        <button
            className="button button-secondary w-100"
            onClick={togglePalettesWindow}
        >
            Browse Palettes
        </button>
    )
}