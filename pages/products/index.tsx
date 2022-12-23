import { GetServerSideProps, GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import Layout from '../../components/Layout';
import Pagination from '../../components/Pagination';
import { allCategory } from '../../constants/categories';
import _ from 'lodash';
import { GenerateQueryString } from '../../utils/queryStringGenerator';
import { formatUrlString } from '../../utils/formatUrlString';

const ProductCard = dynamic(() => import('../../components/Card'));

const Products = (props: any) => {
    const [categories, setCategories] = React.useState<any>([]);
    const [activePage, setActivePage] = React.useState(1);

    const [filter, setFilter] = React.useState({
        category: [],
        subCategory: [],
        price: [],
        color: [],
        size: [],
        brand: [],
        discount: [],
    });

    const router = useRouter(); // router reference

    const initalState = () => {
        const cat = allCategory.find(
            (category) =>
                formatUrlString(category.header) ===
                formatUrlString(props.query.c),
        );

        if (cat) {
            setCategories(cat);
        }
    };

    React.useEffect(() => {
        initalState();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    React.useEffect(() => {
        initalState();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.query]);

    // handle query change
    const handleQueryChange = (
        e: React.ChangeEvent<HTMLElement>,
        { key, value }: any,
    ) => {
        e.preventDefault();
        // if query is already active then remove it from query string
        // else add it to query string
        const queryString = GenerateQueryString(router.query, {
            key: key,
            value: formatUrlString(value),
        });

        router.push(`/products?${queryString}`);
    };

    // check if query is active
    const isQueryActive = (label: string) => {
        return props.query.sc?.includes(formatUrlString(label)) ? true : false;
    };

    return (
        <Layout>
            <div className="container md:flex py-4 lg:py-8">
                {/* filter options */}
                <div className="hidden md:block w-full max-w-[250px] lg:max-w-[300px] pr-4">
                    <h6 className="font-medium border-b border-dashed pb-2 text-gray-400">
                        Filter
                    </h6>

                    <div className="border-b border-dashed border-gray-200 py-3">
                        <h6 className="font-medium text-gray-400 text-sm">
                            Categories
                        </h6>
                        <div className="flex flex-col items-start space-y-2 py-3">
                            {categories
                                ? categories?.links?.map(
                                      (sc: any, index: number) => (
                                          <div
                                              key={index}
                                              className="flex items-center space-x-2 px-3"
                                          >
                                              <label
                                                  htmlFor={formatUrlString(
                                                      sc.label,
                                                  )}
                                                  className="flex items-center space-x-2 select-none"
                                              >
                                                  <input
                                                      type="checkbox"
                                                      id={formatUrlString(
                                                          sc.label,
                                                      )}
                                                      checked={isQueryActive(
                                                          sc.label,
                                                      )}
                                                      onChange={(e) =>
                                                          handleQueryChange(e, {
                                                              key: 'sc',
                                                              value: sc.label,
                                                          })
                                                      }
                                                      className="mr-2"
                                                  />
                                                  {sc.label}
                                              </label>
                                          </div>
                                      ),
                                  )
                                : null}
                        </div>
                    </div>
                </div>

                {/* products */}
                <div className="flex-1">
                    <div className="mb-3 flex items-center justify-between border-b border-dashed">
                        <h6 className="font-medium pb-2 text-gray-400">
                            Products
                        </h6>

                        <Link
                            href="#"
                            className="text-gray-400 block md:hidden"
                        >
                            Filter
                        </Link>
                    </div>

                    <div className="grid grid-cols-12 gap-3 md:gap-6 2xl:gap-8">
                        {[...Array(12)].map((_, index) => (
                            <div
                                key={index}
                                className="col-span-6 sm:col-span-4 md:col-span-6 lg:col-span-4 xl:col-span-3"
                            >
                                <ProductCard
                                    title={`sweater-1 for men's fations`}
                                    alt=""
                                    href={`/product/1`}
                                    image={`/cloths/sweater-1.png`}
                                />
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center justify-end mt-5">
                        <Pagination
                            viewParPage={8}
                            totalItems={100}
                            currentPage={activePage}
                            onPageChange={(page) => setActivePage(page)}
                        />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Products;

export const getServerSideProps: GetServerSideProps = async (context) => {
    // query string from url
    const { query } = context;

    return {
        props: { query },
    };
};
