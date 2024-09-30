import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

import NavBar from './NavBar';

export const MobileMenuButton = () => {
  return (
    <Disclosure as="nav" className="bg-transparent w-screen sm:flex sm:items-start sm:justify-between">
      <div className="flex-1 mx-auto max-w-7xl px-2 sm:px-2">
        <div className="flex h-16 w-screen">
          <div className="flex flex-row w-screen pr-4 mr-10 items-center justify-between sm:hidden sm:mr-0">
            {/* Mobile menu button */}
            <div>
              <img className='h-16 w-16' src="/isotipo_w.png" alt="" />
            </div>
            <div>
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-900 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
              </DisclosureButton>
            </div>
          </div>

          <div className="flex flex-1">
            <div className="hidden sm:flex sm:flex-row sm:w-4/5  sm:items-center sm:justify-between">
              <div className='flex'>
                <img className='h-16 w-16' src="/isotipo_w.png" alt="" />
              </div>
              <div className='flex'>
                <NavBar />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <DisclosurePanel className="md:hidden">
        <NavBar />
      </DisclosurePanel>
    </Disclosure>
  );
};
