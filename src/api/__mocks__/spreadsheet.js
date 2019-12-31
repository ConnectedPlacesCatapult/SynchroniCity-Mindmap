const fakeTag0Unique = [
    { 0: "Internet of Things",
      1: "Public Realm",
      2: "MIMs",
      3: "Mobility",
      4: "Health",
      5: "Smart City Governance",
      6: "Smart City ICT",
      7: "Data Management & AI",
      8: "Buildings",
      9: "Citizen Centric Services",
      10: "Environment",
      11: "Utilities"},
];

const fakeFilteredStandards = [
    {
        serial: "ETSI TS 103 410-4 V1.1.1 (2019-05)",
        url: "https://www.etsi.org/deliver/etsi_ts/103400_103499/10341004/01.01.01_60/ts_10341004v010101p.pdf",
        title_full: "SmartM2M; Extension to SAREF; Part 4: Smart Cities Domain",
        abstract: "The present document is a technical specification of SAREF4Cities, an extension of SAREF for the Smart Cities domain. This extension has been created by investigating resources from potential stakeholders of the ontology, such as standardization bodies (e.g. Open Geospatial Consortium), associations (e.g. Spanish Federation of Municipalities and Provinces), IoT platforms (e.g. FIWARE) and European projects and initiatives (e.g. ISA2  programme) as reported in ETSI TR 103 506",
        date_published: "28/09/2018",
        tag0: "MIMs",
        tag1: "Semantic Data Model",
        tag2: "Ontology",
        tag3: "Smart Health",
        tag4: "Street Lighting",
        tag5: "Parking",
        tag6: "Air Quality",
        tag7: "Mobility",
        organisation: "ETSI TC SmartM2M",
        type: "Specification",
        ICS: ""},
    {
        serial: "ETSI GS CIM 009 V1.1.1 (2019-01)",
        url: "http://webapp.etsi.org/workprogram/Report_WorkItem.asp?WKI_ID=54473",
        title_full: "Context Information Management (CIM); NGSI-LD API",
        abstract: "This Group Specification provides additions and corrections to the GS-004 prelimAPI specification, based on feedback about GS-004 received from other SDOs as well as developers in the linked-data, internet-of-things, and mobile-apps and smart-applications communities, as well as from end users and stakeholders. In particular open issues and proposed features in Annexes of the GS-004 document, including the topics of privacy/security, will be considered for inclusion as part of this specification.",
        date_published: "22/01/2019",
        tag0: "MIMs",
        tag1: "API",
        tag2: "Context Information Management",
        tag3: "",
        tag4: "",
        tag5: "",
        tag6: "",
        tag7: "",
        organisation: "ETSI ISG CIM",
        type: "Specification",
        ICS: ""}
]

const fakeFilteredSubStandards = [
    {
        serial: "ETSI GS CIM 009 V1.1.1 (2019-01)",
        url: "http://webapp.etsi.org/workprogram/Report_WorkItem.asp?WKI_ID=54473",
        title_full: "Context Information Management (CIM); NGSI-LD API",
        abstract: "This Group Specification provides additions and corrections to the GS-004 prelimAPI specification, based on feedback about GS-004 received from other SDOs as well as developers in the linked-data, internet-of-things, and mobile-apps and smart-applications communities, as well as from end users and stakeholders. In particular open issues and proposed features in Annexes of the GS-004 document, including the topics of privacy/security, will be considered for inclusion as part of this specification.",
        date_published: "22/01/2019",
        tag0: "MIMs",
        tag1: "API",
        tag2: "Context Information Management",
        tag3: "",
        tag4: "",
        tag5: "",
        tag6: "",
        tag7: "",
        organisation: "ETSI ISG CIM",
        type: "Specification",
        ICS: ""
    },
]

export const getTag0 = () => {
    return new Promise((resolve, reject) => {
        resolve(fakeTag0Unique);
    });
};

export const getTags = () => {
    return new Promise((resolve, reject) => {
        resolve(fakeFilteredStandards);
    });
};

export const getFilteredSubStandards = () => {
    return new Promise((resolve, reject) => {
        resolve(fakeFilteredSubStandards);
    });
};

