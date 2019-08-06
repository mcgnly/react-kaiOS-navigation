    const KAIOSSCREEN = 320;

    const injectKaiOSNavigation = () => {
        document.addEventListener("DOMContentLoaded", main)
    
        function main(){
            if (window.innerWidth <= KAIOSSCREEN) {
                const tabStops = findTabStops();
                addButtonNav(tabStops);
            }
            return;
        }
    
        function findTabStops() {
            return document.querySelectorAll('button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        }
    
        function addButtonNav(tabStops) {
            let position = -1;
            const maxTabStopIndex = tabStops.length-1;
            
            const changePosition = (currentPosition, advanceBy, maxTabStopIndex) => {
                const newPosition = currentPosition + advanceBy;
                if (currentPosition==0 && newPosition<0) {
                    return 0;
                }
                if (newPosition>maxTabStopIndex) {
                    return maxTabStopIndex;
                }
                return newPosition;
            }
            
            document.addEventListener('keydown', 
            function handleKeydown(e) {
                e.preventDefault();
                switch(e.key) {
                case 'ArrowUp':
                    // scroll up
                    window.scrollBy(0,-50);
                    break;
                case 'ArrowDown':
                    // scroll down
                    window.scrollBy(0,50);
                    break;
                case 'ArrowRight':
                    // select next thing
                    position = changePosition(position, 1, maxTabStopIndex)
                    tabStops[position].focus();
                    break;
                case 'ArrowLeft':
                    // select previous thing
                    position = changePosition(position, -1);
                    tabStops[position].focus();
                    break;
                }
            });
        };
    }
    
    export default injectKaiOSNavigation;
    