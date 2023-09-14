import Icon from "@/components/Icon";
import PrivateLayout from "@/components/PrivateLayout";
import { useState } from "react";
import { Container, Dropdown } from "react-bootstrap";

const CreateListingPage = () => {
  const [isDigital, setIsDigital] = useState<boolean>(true);
  return (
    <>
      <PrivateLayout title="CREATE LISTING">
        <Container className="d-flex px-5 w-50 flex-column align-items-center">
        <Container className="d-flex justify-content-around">
          <div className="bg-light p-3 rounded" style={isDigital ? 
            {borderColor: 'black', borderWidth: 5, border: 'solid'} 
            : {opacity: 0.5}}
          >
            <div className="p-1 rounded" style={{backgroundColor: '#D9D9D9'}}>
              <Icon url="/icons/digital.png" width={60} height={60} />
            </div>
          </div>
          <div className="bg-light p-3 rounded" style={!isDigital ? {borderColor: 'black', borderWidth: 5, border: 'solid'} : {opacity: 0.5}}>
            <div className="p-1 rounded" style={{backgroundColor: '#D9D9D9'}}>
              <Icon url="/icons/physical.png" width={60} height={60} />
            </div>
          </div>
        </Container>
        <Dropdown className="mt-5">
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            {isDigital ? 'Digital Billboard' : 'Physical Billboard'}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => setIsDigital(true)}>Digital Billboard</Dropdown.Item>
            <Dropdown.Item onClick={() => setIsDigital(false)}>Physical Billboard</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        </Container>
      </PrivateLayout>
    </>
  );
};

export default CreateListingPage;
