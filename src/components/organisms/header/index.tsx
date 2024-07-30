/* eslint-disable @typescript-eslint/no-explicit-any */

import SPHeader from '@/components/atoms/sp-header';
import SPButton from '@/components/atoms/sp-button';
import { GoogleIcon } from '@/assets/svgs';
import SPLabel from '@/components/atoms/sp-label';
// import api from '@/service/http.service';
// import { AxiosMethodEnum } from '@/utils/enums/general.enum';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { APP_CONFIG } from '@/utils/constants/app.constant';
import { useQueryClient } from '@tanstack/react-query';
import localforage from 'localforage';
import { STORAGE_KEYS } from '@/utils/constants/storage.constant';
import { useNavigate } from 'react-router-dom';
// import { useEffect, useState } from 'react';

interface IUserInfo {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
  authuser: string;
  hd: string;
  prompt: string;
}

/**
 * Header component for the application.
 * It includes the Google sign-in button and a dropdown menu for user settings.
 *
 * @returns {React.ReactElement} - The Header component.
 */

// let _api = new api();
export default function Header() {
  // const [notificationVisible, setNotificationVisible] =
  //   useState<boolean>(false);

  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const userInfoData: IUserInfo = await axios.get(
        'https://www.googleapis.com/oauth2/v3/userinfo',
        {
          headers: { Authorization: 'Bearer ' + tokenResponse.access_token },
          params: {
            scope:
              'https://mail.google.com/ https://www.googleapis.com/auth/gmail.metadata https://www.googleapis.com/auth/gmail.modify https://www.googleapis.com/auth/gmail.readonly',
          },
        }
      );

      console.log({ userInfoData });

      apiHit(tokenResponse as any);
    },
    onError: (errorResponse) => console.log(errorResponse),
  });

  async function apiHit(tokenResponse: any) {
    const accessToken = await localforage.getItem(STORAGE_KEYS.AUTH.AUTH_TOKEN);

    fetch(
      `${APP_CONFIG.api.baseUrl}/email-content/extract?accessToken=${tokenResponse?.access_token}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    ).then((response) => {
      console.log({ response });
      queryClient.invalidateQueries({ queryKey: ['email-content'] });
    });
  }

  return (
    <SPHeader
      className="flex h-16 items-center justify-end border-0  border-l-2 border-solid border-[#f5f5f5] bg-white"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div className="flex flex-row items-center justify-center gap-3">
        {/* <SPDropdown
          open={notificationVisible}
          onOpenChange={(open) => setNotificationVisible(open)}
          trigger={['click']}
          dropdownRender={() => (
            <DropdownMenu
              heading="Notifications"
              headingActions={[<SPSwitch />]}
              data={[
                {
                  message:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit and many more lksjdlk aslkdjalksd asdlkjaslkdj aslkdjsalkjdsa salkdjlsakjd sadmnasd,m salkdjlksadj salkdjlksadj askldjlksadjlksajd lksajdlksajdlksajd lkasjdlksadj aslkjdsalkdj asdlksajdlksajd salkjdlsakjdl.',
                  time: '12:00 PM',
                },
                {
                  message:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                  time: '12:00 PM',
                },
                {
                  message:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                  time: '12:00 PM',
                },
                {
                  message:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                  time: '12:00 PM',
                },
                {
                  message:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                  time: '12:00 PM',
                },
                {
                  message:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                  time: '12:00 PM',
                },
                {
                  message:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                  time: '12:00 PM',
                },
                {
                  message:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                  time: '12:00 PM',
                },
                {
                  message:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                  time: '12:00 PM',
                },
                {
                  message:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                  time: '12:00 PM',
                },
                {
                  message:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                  time: '12:00 PM',
                },
                {
                  message:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                  time: '12:00 PM',
                },
                {
                  message:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                  time: '12:00 PM',
                },
                {
                  message:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                  time: '12:00 PM',
                },
                {
                  message:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                  time: '12:00 PM',
                },
                {
                  message:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                  time: '12:00 PM',
                },
                {
                  message:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                  time: '12:00 PM',
                },
                {
                  message:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                  time: '12:00 PM',
                },
              ]}
              component={NotificationItem}
              onClose={() => setNotificationVisible(false)}
            />
          )}
        ></SPDropdown> */}
        {/* <SPDropdown menu={{ items: [] }} trigger={['click']}>
          <Link to="/settings" className="flex cursor-pointer flex-row gap-2">
            <NameAvatar
              name={`${user?.firstName} ${user?.lastName}`}
              role={_.capitalize(_.startCase(user?.accountType) ?? 'ADMIN')}
              url={`${user?.profilePicture?.path ? createAssetUrl(user?.profilePicture?.path) : Avatar}`}
            />
          </Link>
        </SPDropdown> */}

        <SPButton
          className="flex max-w-[700px] flex-row items-center"
          onClick={googleLogin as any}
        >
          <GoogleIcon />
          <SPLabel className="ml-2 text-base">Extract Data with Email</SPLabel>
        </SPButton>
      </div>
      <div className="ml-2 flex items-center justify-between gap-3">
        <SPButton
          onClick={async () => {
            await localforage.removeItem(STORAGE_KEYS.AUTH.AUTH_TOKEN);
            await localforage.removeItem(STORAGE_KEYS.AUTH.REFRESH_TOKEN);
            queryClient.clear();

            navigate('/auth/sign-in', { replace: true });
          }}
        >
          Logout
        </SPButton>
      </div>
    </SPHeader>
  );
}
