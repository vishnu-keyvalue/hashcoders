import Head from "next/head";
import { brandName, platformListingColumns } from "@/constants/common";
import Table from "@/components/Table";
import Icon from "@/components/Icon";
import PrivateLayout from "@/components/PrivateLayout";

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
        <Table title="Platform Listing"
          columns={platformListingColumns}
          data={platformListingData} />
      </PrivateLayout>
    </>
  );
}
