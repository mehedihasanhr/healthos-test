import Image from 'next/image';
import Link from 'next/link';
import { Input, SelectionInput } from '../components/Form';
import * as React from 'react';

const ProfileInfo = () => {
    return (
        <React.Fragment>
            <form>
                <div className="grid grid-cols-12 gap-y-8 lg:gap-8">
                    <div className="col-span-12 lg:col-span-4 lg:bg-zinc-50">
                        <div className="w-full h-full flex lg:items-center lg:justify-center">
                            <div className="w-[200px] h-[200px] bg-slate-300" />
                        </div>
                    </div>
                    <div className="col-span-12 xl:col-span-8 grid grid-cols-4 lg:grid-cols-8 lg:gap-x-8 gap-y-3">
                        <div className="col-span-4">
                            <Input label="Name" />
                        </div>
                        <div className="col-span-4">
                            <Input label="Email" />
                        </div>

                        <div className="col-span-4">
                            <Input label="Date of birth" />
                        </div>
                        <div className="col-span-4">
                            <Input label="Phone" />
                        </div>
                        <div className="col-span-4">
                            <SelectionInput
                                value="male"
                                label="Gander"
                                options={[
                                    { title: 'Male', val: 'male' },
                                    { title: 'Female', val: 'female' },
                                    { title: 'Other', val: 'other' },
                                ]}
                                iconClass="text-gray-400"
                                className="bg-slate-100"
                                onSelect={(val) => console.log(val)}
                            />
                        </div>

                        <div className="col-span-4 flex">
                            <Link
                                href="#"
                                className="block mt-auto w-full text-center py-2 rounded-md bg-blue-500 text-blue-50 hover:bg-blue-600"
                            >
                                Save
                            </Link>
                        </div>
                    </div>
                </div>

                {/* shipping address */}
                <div className="mt-8">
                    <div className="border-b border-dashed py-3 mb-4">
                        <h5 className="font-semibold">Shipping Address</h5>
                    </div>

                    <div className="grid grid-cols-12 gap-y-3 lg:gap-8 ">
                        <div className="col-span-12 md:col-span-6 xl:col-span-4">
                            <Input label="City" />
                        </div>

                        <div className="col-span-12 md:col-span-6 xl:col-span-4">
                            <Input label="Zip Code" />
                        </div>

                        <div className="col-span-12 md:col-span-6 xl:col-span-4">
                            <Input label="Address" />
                        </div>

                        <div className="col-span-12 md:col-span-6 xl:col-span-4 flex">
                            <Link
                                href="#"
                                className="block mt-auto w-full text-center py-2 rounded-md bg-blue-500 text-blue-50 hover:bg-blue-600"
                            >
                                Save
                            </Link>
                        </div>
                    </div>
                </div>
            </form>
        </React.Fragment>
    );
};

export default ProfileInfo;
