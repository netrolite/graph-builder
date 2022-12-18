export default function BrowsePalettesBtn({setShowPalettesPopup}) {
    function togglePalettesWindow(e) {
        e.preventDefault();
        setShowPalettesPopup(prevState => !prevState);
    }
    
    return (
        <button
            className="button button-secondary w-100"
            onClick={e => togglePalettesWindow(e)}
        >
            Browse Palettes
        </button>
    )
}