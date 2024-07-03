// import { useState } from 'react';

import _ from 'lodash';
import SPHeader from '@/components/atoms/sp-header';
import SPButton from '@/components/atoms/sp-button';
import { GoogleIcon } from '@/assets/svgs';
import SPLabel from '@/components/atoms/sp-label';

export default function Header() {
  // const [notificationVisible, setNotificationVisible] =
  //   useState<boolean>(false);

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

        <SPButton className="flex max-w-[700px] flex-row items-center ">
          <GoogleIcon />
          <SPLabel className="ml-2 text-base">Sign In With Google</SPLabel>
        </SPButton>
      </div>
      <div className="flex items-center justify-between gap-3"></div>
    </SPHeader>
  );
}
