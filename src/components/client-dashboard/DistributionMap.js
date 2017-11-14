import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Datamaps from 'datamaps';
import styles from '../../styles/utils/variables.css';

class DistributionMap extends React.Component {

    constructor(props) {
        super(props);
        this.resizeMap = this.resizeMap.bind(this);
    }

    render() {
        const style = {
            height: '100%',
            position: 'relative',
            width: '100%',
            ...this.props.style
        };
        return <div ref="container" style={style} />;
    }

    drawMap() {
        let map = this.map;
        let self = this;
        if (!map) {
            map = this.map = new Datamaps({
                element: this.refs.container,
                scope: 'world',
                fills: {
                    'covered': '#41ADDD',
                    defaultFill: '#EDEDED'
                },
                data: {
                    'CHN': { fillKey: 'covered' },
                    'USA': { fillKey: 'covered' }
                },
                responsive: true,
                aspectRatio: 0.3,
                geographyConfig: {
                    borderWidth: 2,
                    borderOpacity: 1,
                    borderColor: '#DDDDDD',
                    highlightOnHover: true,
                    highlightBorderColor: '#41ADDD',
                    highlightFillColor: '#6CC0E5'
                },
                done: function(datamap){
                    datamap.svg.selectAll('.datamaps-subunit').on('click', function(geography) {
                        self.regionOnClick.bind(self)(geography);
                    });
                }
            });
        } else {
            map.updateChoropleth(data, updateChoroplethOptions);
        }

        map.labels({labelColor: '#CCCCCC', fontSize: 8});
    }

    regionOnClick(geography) {
        console.log('Clicked on:',geography.id,' - ', geography.properties.name);
    }

    clear() {
        const { container } = this.refs;

        for (const child of Array.from(container.childNodes)) {
            container.removeChild(child);
        }

        delete this.map;
    }

    resizeMap() {
        this.map.resize();
    }

    componentDidUpdate() {
        this.drawMap();
        $(this.refs.container).on('map-click', function(event, data) {
           // data.geography is the geoJSON
          alert( data.geography.id ); //alerts "CA" if you clicked California
          //  data.data is the data you passed in to render the map, so in the ch
          alert( data.data.electoralVotes ); //alerts 32 if you clicked California
        });
    }

    componentDidMount() {
        this.drawMap();
        window.addEventListener('resize', this.resizeMap);
    }

    componentWillUnmount() {
        this.clear();
        window.removeEventListener('resize', this.resizeMap);
    }



};

DistributionMap.propTypes = {
    countries: PropTypes.shape({})
};



DistributionMap = connect()(DistributionMap);

export default DistributionMap;
