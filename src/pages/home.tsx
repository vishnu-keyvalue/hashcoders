import Head from "next/head";
import { brandName, platformListingColumns } from "@/constants/common";
import Table from "@/components/Table";
import Icon from "@/components/Icon";
import PrivateLayout from "@/components/PrivateLayout";
import SummaryCard from "@/components/SummaryCard";

const platformListingData = [
  {
    id: 1,
    listingName: 'Beetlejuice',
    visitors: '20',
    uniqueUsers: '10',
    bounceRate: <div className="gap-2 d-flex align-items-start"><Icon url='/icons/up.png' width={15} height={15} /><p>30%</p></div>,
  },
  {
    id: 2,
    listingName: 'Beetlejuice',
    visitors: '30',
    uniqueUsers: '10',
    bounceRate: <div className="gap-2 d-flex"><Icon url='/icons/up.png' width={15} height={15} /><p>30%</p></div>,
  },
]

export default function Home() {
  return (
    <>
      <PrivateLayout title="DASHBOARD">
        <>
        <SummarySection />
        <Table title="Platform Listing"
          columns={platformListingColumns}
          data={platformListingData} />
          </>
      </PrivateLayout>
    </>
  );
}

//  Summary section
const SummarySection = () => {
  return (
    <div style={{marginTop: '50px'}} className="d-flex justify-content-between">
        <SummaryCard
        count="350,897"
        subText="Views"
        duration="Since last month"
        isGain
        percentage="3.48%"
        title="METRO KALOOR BILLBOARD"
        icon="/icons/stats.png"
         />
        <SummaryCard 
         count="2,356"
         duration="Since last month"
         isGain={false}
         percentage="3.48%"
         title="NEW USERS"
        icon="/icons/profit.png"
         />
        <SummaryCard 
         count="350,897"
         duration="Since yesterday"
         isGain={false}
         percentage="1.10%"
         title="PROFIT"
         icon="/icons/new-user.png"

        />
        </div>
  )
}