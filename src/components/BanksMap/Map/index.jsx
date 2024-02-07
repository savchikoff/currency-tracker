import { PureComponent, createRef } from 'react';
import mapboxgl from 'mapbox-gl';

import MapContainer from './styled';
import { MAP_INITIAL_STATE, MAP_STYLE } from './config';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_KEY;

export default class Map extends PureComponent {
	constructor(props) {
		super(props);
		this.state = MAP_INITIAL_STATE;
		this.mapContainer = createRef();
		this.markers = [];
	}

	componentDidMount() {
		const { lng, lat, zoom } = this.state;
		this.map = new mapboxgl.Map({
			container: this.mapContainer.current,
			style: MAP_STYLE,
			center: [lng, lat],
			zoom: zoom,
		});
	}

	componentWillUnmount() {
		if (this.map) {
			this.map.remove();
		}
	}

	componentDidUpdate(prevProps) {
		if (prevProps.banks !== this.props.banks) {
			this.removeMarkers();
			this.addMarkers();
		}
	}

	addMarkers = () => {
		const { banks } = this.props;
		banks.forEach((bank) => {
			const popUp = new mapboxgl.Popup({ offset: 25 }).setHTML(
				`<h3>${bank.name}</h3><p>${bank.address
				}</p><p>Available currencies: <br> ${bank.currencies.join(', ')}</p > `
			);
			const marker = new mapboxgl.Marker()
				.setLngLat([bank.lng, bank.lat])
				.setPopup(popUp)
				.addTo(this.map);
			this.markers.push(marker);
		});
		console.log(this.markers);
	};

	removeMarkers() {
		this.markers.forEach((marker) => {
			marker.remove();
		});
		this.markers = [];
	}

	render() {
		return <MapContainer ref={this.mapContainer} />;
	}
}
