import React from 'react';
import { useLocation, Link } from 'react-router-dom'; // Thêm Link từ react-router-dom
import { sidebarAdminRoutes } from '../../../routes/partialRoutes';
import { Logo } from '../../../components';

const SidebarAdmin = () => {
  const location = useLocation();
  return (
    <div className='w-sidebar min-h-screen bg-white border-r fixed left-0 top-0 bottom-0'>
      <div>
        <div className="pb-8">
          <div className="border-b">
            <Logo />
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          {sidebarAdminRoutes.map((route, index) => {
            const Icon = route.icon;
            return (
              <div
                key={index}
                className={`relative px-6 ${location.pathname === route.path ? 'before:absolute before:top-1/2 before:-translate-y-1/2 before:left-1 before:w-[4px] before:h-2/3 before:bg-active' : ''
                  }`}
              >
                <Link
                  to={route.path}
                  className={`flex items-center gap-x-5 px-3 py-2 rounded-md font-Inter text-base font-medium ${location.pathname === route.path ? 'bg-indigo-100 text-active' : 'bg-transparent text-[#7C8493]'
                    }`}
                >
                  <Icon className="w-6 h-6" />
                  {route.name}
                </Link>
              </div>
            );
          })}
        </div>
        <div></div>
      </div>
      <div></div>
    </div>
  );
};

export default SidebarAdmin;
