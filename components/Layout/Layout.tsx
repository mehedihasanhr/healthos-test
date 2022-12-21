import { Inter } from '@next/font/google';
import Navbar from '../Navbar';
import { TopNavbar } from '../Navbar/Topbar';
const inter = Inter({ subsets: ['latin'] });

type LayoutProps = { children: React.ReactNode };

const Layout = (props: LayoutProps) => {
    return (
        <main className={inter.className}>
            <TopNavbar />
            <Navbar />
            <div className="flex items-center">{props.children}</div>
        </main>
    );
};

export default Layout;
