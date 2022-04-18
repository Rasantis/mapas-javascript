function initMap() {
	// Update MAP_ID with custom map ID
	map = new google.maps.Map(document.getElementById('map'), {
		center: {
			lat:  -23.535825754013302,        
			lng:  -46.679021292490795,
		},
		zoom: 18,
		mapId: 'MAP_ID',
		mapTypeControl: false,
		fullscreenControl: false,
		streetViewControl: false,
	});
      			

	// Name
	// Latitude, Longitude
	// Image URL
	// scaledSize width, height
	const markers = [
		[
			"Câmera 1",
            -23.53720897786743,      
			-46.67976426436105,
			'camera_desenho.svg',
			38,
			31,
		],
		[
			'Você está aqui',
			-23.535825754013302,      
			-46.679021292490795,
			'you_are_here.svg',
			90,
			57.8,
		],
		[
			'Câmera 2',
            -23.535871639468454,          
			-46.68405306251624,
			'camera_desenho.svg',
			40,
			48,
		],
		['Câmera 3', -23.532180231123892, -46.685060563525525, 'camera_desenho.svg', 40, 53],    
		['Câmera 4', -23.564380066182217, -46.65286137848746, 'camera_desenho.svg', 38, 42.5],       
		['Câmera 5', -23.583629229145345, -46.682822368275325, 'camera_desenho.svg', 38, 38],   
		[
			'Câmera 6',
			-23.538311128345,     
            -46.729840006041286,
			'camera_desenho.svg',
			50,
			60.7,
		],
		[
			'Câmera 7',
			-23.61300739828659,       
			-46.66503927182626,
			'camera_desenho.svg',
			50,
			60.7,
		],
		[
			'Câmera 8',
			-23.5780353593881,       
			-46.69401702693257,    
			'camera_desenho.svg',
			50,
			60.7,
		],
	];

	for (let i = 0; i < markers.length; i++) {
		const currMarker = markers[i];

		const marker = new google.maps.Marker({
			position: { lat: currMarker[1], lng: currMarker[2] },
			map,
			title: currMarker[0],
			icon: {
				url: currMarker[3],
				scaledSize: new google.maps.Size(currMarker[4], currMarker[5]),
			},
			animation: google.maps.Animation.DROP,
		});

		const infowindow = new google.maps.InfoWindow({
			content: currMarker[0],
		});

		marker.addListener('click', () => {
			infowindow.open(map, marker);
		});
	}
}
