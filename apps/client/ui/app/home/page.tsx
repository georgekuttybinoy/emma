

import Header from "@/app/components/Header";

import Backgroundsection from "@/app/components/Backgroundsection";
// import Backgroundsection2 from "@/app/components/Backgroundsection2";
import Homesection3 from "@/app/components/Homesection3";
import Homesection4 from "@/app/components/Homesection4";
import Homesection5 from "@/app/components/Homesection5";
import Homesection6 from "@/app/components/Homesection6";


export default function Home() {
    return (
        <main className="relative">
<Header/>
<Backgroundsection/>
 {/* <Backgroundsection2/>  */}
<Homesection3/>
<Homesection4/>
<Homesection5/>
<Homesection6/>
        </main>

        );
    }
    