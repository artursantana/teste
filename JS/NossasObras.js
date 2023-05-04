



    /*CAROUSEL NOSSAS OBRAS*/

  
    const carouselNO =() => {
        let count = 1;

        
        const maxNumber = () => {
            count++
            if(count > 4){
                count = 1
            }
            document.getElementById('btn'+count).checked = true
        }
        setInterval(() => {
            maxNumber()
        }, 2000);
    }
    carouselNO()

    /*CAROUSEL NOSSAS OBRAS*/






       /*GOOGLE MAPS*/

       const maps = () => {

        let map = L.map('map').setView([40.40984249292416, -3.7051295710895213], 6);
    
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    
    let marker = L.marker([41.159627587389835, -8.632654597142025]).addTo(map);
    let marker1 = L.marker([38.72217238263541, -9.139264846518588]).addTo(map);
    let marker2 = L.marker([37.019147238287815, -7.929635114322302]).addTo(map);    //marcadores
    let marker3 = L.marker([40.40984249292416, -3.7051295710895213]).addTo(map);
    let marker4 = L.marker([39.47560458476969, -6.377502337406814]).addTo(map);
        }
        maps()
    
        /*GOOGLE MAPS*/
    