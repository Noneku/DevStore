import React from "react";
import { Avatar } from "@material-tailwind/react";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineIcon,
  Typography,
  TimelineHeader,
} from "@material-tailwind/react";
import {
  BellIcon,
  ArchiveBoxIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";

const Profile = () => {
  return (
    <div className="flex-col content-center">
      <Avatar
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
        alt="avatar"
        size="xxl"
      />
      <div className="flex justify-around">
        <div className="bg-gray-200 p-4 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-gray-600 font-bold mb-2">
              Nom de compte
            </label>
            <p className="text-gray-800">Votre nom de compte ici</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 font-bold mb-2">
              Mot de passe
            </label>
            <p className="text-gray-800">Votre mot de passe ici</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 font-bold mb-2">
              Adresse
            </label>
            <p className="text-gray-800">Votre adresse ici</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 font-bold mb-2">
              Carte Enregistrée
            </label>
            <p className="text-gray-800">Votre carte enregistrée ici</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 font-bold mb-2">
              Adresse Mail
            </label>
            <p className="text-gray-800">Votre adresse mail ici</p>
          </div>
          <div>
            <label className="block text-gray-600 font-bold mb-2">
              Numéro de Téléphone
            </label>
            <p className="text-gray-800">Votre numéro de téléphone ici</p>
          </div>
        </div>
        <div className="w-[25rem]">
          <Timeline>
            <TimelineItem className="h-28">
              <TimelineConnector className="!w-[78px]" />
              <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                <TimelineIcon className="p-3" variant="ghost">
                  <BellIcon className="h-5 w-5" />
                </TimelineIcon>
                <div className="flex flex-col gap-1">
                  <Typography variant="h6" color="blue-gray">
                    $2400, Design changes
                  </Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal"
                  >
                    22 DEC 7:20 PM
                  </Typography>
                </div>
              </TimelineHeader>
            </TimelineItem>
            <TimelineItem className="h-28">
              <TimelineConnector className="!w-[78px]" />
              <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                <TimelineIcon className="p-3" variant="ghost" color="red">
                  <ArchiveBoxIcon className="h-5 w-5" />
                </TimelineIcon>
                <div className="flex flex-col gap-1">
                  <Typography variant="h6" color="blue-gray">
                    New order #1832412
                  </Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal"
                  >
                    21 DEC 11 PM
                  </Typography>
                </div>
              </TimelineHeader>
            </TimelineItem>
            <TimelineItem className="h-28">
              <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                <TimelineIcon className="p-3" variant="ghost" color="green">
                  <CurrencyDollarIcon className="h-5 w-5" />
                </TimelineIcon>
                <div className="flex flex-col gap-1">
                  <Typography variant="h6" color="blue-gray">
                    Payment completed for order #4395133
                  </Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal"
                  >
                    20 DEC 2:20 AM
                  </Typography>
                </div>
              </TimelineHeader>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
    </div>
  );
};

export default Profile;
