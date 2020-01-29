import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import bobSosa from "../images/bob-sosa-building.jpg";
import parsons from "../images/parsons-end.jpg";
import pool from "../images/pool-front.jpg";
import veterans from "../images/veterans-field.jpg";
import BobSosa from "../components/facilitiesComponents/bobSosaBuilding";
import MainOffice from "../components/facilitiesComponents/mainOffice";
import LegendsField from "../components/facilitiesComponents/legendsField";
import ParsonsField from "../components/facilitiesComponents/parsonsField";
import VeteransField from "../components/facilitiesComponents/veteransField";
import PatConcannonFields from "../components/facilitiesComponents/patConcannonFields";
import Pool from "../components/facilitiesComponents/pool";

const Facilities = ({ props }) => {
  return (
    <Layout>
      <SEO
        title="Facilities"
        keywords={[
          `hugoton`,
          `facilities`,
          `recreation`,
          `sports`,
          "activites",
          "leisure"
        ]}
      />
      <div />
      <div className="container">
        <MainOffice />
        <div className={`columns is-multiline `}>
          <div className="column is-half">
            <BobSosa />
          </div>
          <div className="column is-half">
            <LegendsField />
          </div>
          <div className="column is-half">
            <ParsonsField />
          </div>
          <div className="column is-half">
            <VeteransField />
          </div>
          <div className="column is-half">
            <PatConcannonFields />
          </div>
          <div className="column is-half">
            <Pool />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Facilities;
