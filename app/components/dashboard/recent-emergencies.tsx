'use client';

import { Card, Title, Text, Callout } from '@tremor/react';
import { Emergency } from '../../../lib/types/emergency';
import { ExclamationTriangleIcon, LinkIcon } from '@heroicons/react/24/outline';
import { useMap } from 'react-map-gl';

export default function RecentEmergenciesComponent({
  emergencies,
  setSelectedEmergency,
  setShowPopup
}: {
  emergencies: Emergency[];
  setSelectedEmergency: React.Dispatch<React.SetStateAction<Emergency | null>>;
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { emergencyMap } = useMap();

  const handleCalloutClick = (emergency: Emergency) => {
    emergencyMap.flyTo({
      center: [emergency.longitude, emergency.latitude]
    });
    setSelectedEmergency(emergency);
    setShowPopup(true);
  };

  return (
    <Card className='h-96 overflow-auto'>
      <Title>Emergencias recientes</Title>
      <Text>Accede a la publicación</Text>

      {emergencies.map((emergency) => (
        <div key={emergency.id} className="mt-4 cursor-pointer hover:bg-amber-100">
          <Callout
            className="flex justify-between items-center"
            icon={ExclamationTriangleIcon}
            title=""
            color="amber"
            onClick={() => handleCalloutClick(emergency)}
          >
            <span>{emergency.full_text}</span>
            <a
              href={`https://twitter.com/bomberostemuco/status/${emergency.id}`}
              target="_blank"
              rel="noopener noreferrer"
              title="Ver publicación"
              className="right"
            >
              <LinkIcon className="h-6 w-6 text-blue-500" />
            </a>
          </Callout>
        </div>
      ))}
    </Card>
  );
}
