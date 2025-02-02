import React from 'react';

import type { position } from 'src/App';

import { LocationMarkerIcon } from '@heroicons/react/outline';

export interface CoordinatesProps {
  position: position;
}

const Coordinates = (props: CoordinatesProps) => {
  return (
    <div className="flex bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-100 h-10 shadow-md border rounded-md">
      <div className="flex my-auto mx-2">
        <LocationMarkerIcon className="w-5 h-5 mr-2 my-auto" />
        <div className="mx-auto text-lg">
          Lat: <small>{parseFloat(props.position.lat.toPrecision(4))}</small>,
          Lng: <small>{parseFloat(props.position.lng.toPrecision(4))}</small>
        </div>
      </div>
    </div>
  );
};

export default Coordinates;
