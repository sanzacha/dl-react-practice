import axios from 'axios';

// console.log('yes',dealers)

const initState = {
    dealers: [
    {
      "id": "us_en_nissan_NNA5584",
      "dealerId": "NNA5584",
      "name": "NISSAN OF SOUTH BAY",
      "marketingGroupId": "803",
      "urlId": "NNA5584",
      "address": {
        "city": "TORRANCE",
        "addressLine1": "20550 HAWTHORNE BLVD",
        "addressLine2": "",
        "postalCode": "90503",
        "stateCode": "CA",
        "state": "California"
      },
      "geolocation": {
        "longitude": -118.353138,
        "latitude": 33.8434814
      },
      "contact": {
        "websites": [
          {
            "identifier": "Main",
            "url": "http://www.nissanofsouthbay.com"
          },
          {
            "identifier": "One To One Online Service Scheduling",
            "url": "http://consumer.xtime.com/scheduling/?webKey=nis201605160322xx1"
          }
        ],
        "website": "http://www.nissanofsouthbay.com",
        "phone": "(310) 536-4000"
      },
      "canAcceptLeads": true,
      "hasDealerWebsite": false,
      "services": [
        {
          "id": "us_en_nissan_S_SLS"
        },
        {
          "id": "us_en_nissan_S_SVC"
        },
        {
          "id": "us_en_nissan_S_GTR"
        },
        {
          "id": "us_en_nissan_S_BC"
        },
        {
          "id": "us_en_nissan_S_CPO"
        },
        {
          "id": "us_en_nissan_S_RNTL"
        },
        {
          "id": "us_en_nissan_S_GP"
        },
        {
          "id": "us_en_nissan_S_OS"
        }
      ],
      "awards": [
        {
          "id": "A_WHLSL",
          "title": "Nissan Wholesale Retailer",
          "description": "Genuine Nissan Parts are sold by this dealer via the Wholesale Chanel.\r\nGenuine Nissan Parts deliver model-specific engineering, perfect fit, reliability, and like new performance.\r\nGenuine Nissan Parts fit the first time, helping your customers save time and money.\r\nBased on latest available dealers at time of posting."
        }
      ],
      "certifications": [
        {
          "id": "C_IC",
          "title": "Nissan Internet Certified Dealer",
          "description": "A Nissan Internet Certified Dealer has been recognized for achievement in online customer relations. Internet Certified Dealers are continually measured against performance criteria including response time to e-mail inquiries, customer survey results and overall quality of communications. \r\nNissan will continually strive to deliver an online shopping experience that exceeds your expectations."
        },
        {
          "id": "C_GTR",
          "title": "Nissan GT-R Dealer",
          "description": "This Dealer is certified to sell and fully service the Nissan GT-R. \r\nBased on latest available list of certified dealers at the time of posting."
        },
        {
          "id": "C_BC",
          "title": "Business Certified Dealer",
          "description": "This Dealer is authorized to sell, offer exclusive commercial incentives and service all Nissan Commmercial Vehicles,including NV Cargo, NV Passender and NV200 Compact Cargo Vans.\r\n\r\n*Based on latest available dealers at time of posting.\r\n\r\nTo learn more go to: www.nissanbusinesscertified.com"
        }
      ],
      "distance": {
        "km": 1.3975464075998878,
        "miles": 0.8683948088367499
      }
    },
    {
      "id": "us_en_nissan_NNA153C",
      "dealerId": "NNA153C",
      "name": "GARDENA NISSAN",
      "marketingGroupId": "803",
      "urlId": "NNA153C",
      "address": {
        "city": "GARDENA",
        "addressLine1": "1670 W REDONDO BEACH BLVD",
        "addressLine2": "",
        "postalCode": "90247",
        "stateCode": "CA",
        "state": "California"
      },
      "geolocation": {
        "longitude": -118.306985,
        "latitude": 33.889211
      },
      "contact": {
        "websites": [
          {
            "identifier": "Main",
            "url": "http://gardenanissan.com/"
          },
          {
            "identifier": "One To One Online Service Scheduling",
            "url": "http://consumer.xtime.com/scheduling/?webKey=nis201112080317153c"
          }
        ],
        "phone": "(310) 532-1600"
      },
      "canAcceptLeads": true,
      "hasDealerWebsite": false,
      "services": [
        {
          "id": "us_en_nissan_S_SLS"
        },
        {
          "id": "us_en_nissan_S_SVC"
        },
        {
          "id": "us_en_nissan_S_LF"
        },
        {
          "id": "us_en_nissan_S_GTR"
        },
        {
          "id": "us_en_nissan_S_CPO"
        },
        {
          "id": "us_en_nissan_S_RNTL"
        },
        {
          "id": "us_en_nissan_S_ES"
        },
        {
          "id": "us_en_nissan_S_GP"
        },
        {
          "id": "us_en_nissan_P_O2O"
        },
        {
          "id": "us_en_nissan_S_OS"
        }
      ],
      "awards": [
        {
          "id": "A_WHLSL",
          "title": "Nissan Wholesale Retailer",
          "description": "Genuine Nissan Parts are sold by this dealer via the Wholesale Chanel.\nGenuine Nissan Parts deliver model-specific engineering, perfect fit, reliability, and like new performance.\nGenuine Nissan Parts fit the first time, helping your customers save time and money.\nBased on latest available dealers at time of posting."
        }
      ],
      "certifications": [
        {
          "id": "C_CP",
          "title": "Customer Promise Certified Dealer",
          "description": "At Nissan, we beelive the treatment you receive is just as important as the vehicle you own.\n\nThe Nissan Customer Promise Certification means this dealr is committed to giving you the best customer service possible."
        },
        {
          "id": "C_LF",
          "title": "Nissan LEAF® Dealer",
          "description": "This Dealer is certified to sell and fully service the Nissan LEAF.\n*Based on latest available list of certified dealers at the time of posting."
        },
        {
          "id": "C_GTR",
          "title": "Nissan GT-R Dealer",
          "description": "This Dealer is certified to sell and fully service the Nissan GT-R. \nBased on latest available list of certified dealers at the time of posting."
        },
        {
          "id": "C_ES",
          "title": "Nissan Express Service Certified Dealer",
          "description": "Nissan Express Service is offered at this dealer. Express Service is the same expert service you trust; now faster and more convenient. And you don't need an appoinment! \nEvery Express Service Oil & Filter change will include a Free Multi-Point Inspection and be completed in 30 minutes or less - or your next Express Service Oil & Filter change is free. It's our promise to you. \nAsk your dealer about other Express Services."
        }
      ],
      "distance": {
        "km": 6.706167443580584,
        "miles": 4.1670179705851105
      }
    },
    {
      "id": "us_en_nissan_NNA5230",
      "dealerId": "NNA5230",
      "name": "CARSON NISSAN",
      "marketingGroupId": "803",
      "urlId": "NNA5230",
      "address": {
        "city": "CARSON",
        "addressLine1": "1505 E 223RD STREET",
        "addressLine2": "",
        "postalCode": "90745",
        "stateCode": "CA",
        "state": "California"
      },
      "geolocation": {
        "longitude": -118.246401,
        "latitude": 33.824321
      },
      "contact": {
        "websites": [
          {
            "identifier": "Main",
            "url": "http://www.carsonnissan.com"
          },
          {
            "identifier": "One To One Online Service Scheduling",
            "url": "http://consumer.xtime.com/scheduling/?webKey=nis2011120803175230"
          }
        ],
        "phone": "(310) 221-5119"
      },
      "canAcceptLeads": true,
      "hasDealerWebsite": false,
      "services": [
        {
          "id": "us_en_nissan_S_SLS"
        },
        {
          "id": "us_en_nissan_S_SVC"
        },
        {
          "id": "us_en_nissan_S_LF"
        },
        {
          "id": "us_en_nissan_S_GTR"
        },
        {
          "id": "us_en_nissan_S_BC"
        },
        {
          "id": "us_en_nissan_S_CPO"
        },
        {
          "id": "us_en_nissan_S_RNTL"
        },
        {
          "id": "us_en_nissan_S_ES"
        },
        {
          "id": "us_en_nissan_S_GP"
        },
        {
          "id": "us_en_nissan_P_O2O"
        },
        {
          "id": "us_en_nissan_S_OS"
        }
      ],
      "awards": [
        {
          "id": "A_WHLSL",
          "title": "Nissan Wholesale Retailer",
          "description": "Genuine Nissan Parts are sold by this dealer via the Wholesale Chanel.\nGenuine Nissan Parts deliver model-specific engineering, perfect fit, reliability, and like new performance.\nGenuine Nissan Parts fit the first time, helping your customers save time and money.\nBased on latest available dealers at time of posting."
        }
      ],
      "certifications": [
        {
          "id": "C_CP",
          "title": "Customer Promise Certified Dealer",
          "description": "At Nissan, we beelive the treatment you receive is just as important as the vehicle you own.\n\nThe Nissan Customer Promise Certification means this dealr is committed to giving you the best customer service possible."
        },
        {
          "id": "C_IC",
          "title": "Nissan Internet Certified Dealer",
          "description": "A Nissan Internet Certified Dealer has been recognized for achievement in online customer relations. Internet Certified Dealers are continually measured against performance criteria including response time to e-mail inquiries, customer survey results and overall quality of communications. \nNissan will continually strive to deliver an online shopping experience that exceeds your expectations."
        },
        {
          "id": "C_LF",
          "title": "Nissan LEAF® Dealer",
          "description": "This Dealer is certified to sell and fully service the Nissan LEAF.\n*Based on latest available list of certified dealers at the time of posting."
        },
        {
          "id": "C_GTR",
          "title": "Nissan GT-R Dealer",
          "description": "This Dealer is certified to sell and fully service the Nissan GT-R. \nBased on latest available list of certified dealers at the time of posting."
        },
        {
          "id": "C_BC",
          "title": "Business Certified Dealer",
          "description": "This Dealer is authorized to sell, offer exclusive commercial incentives and service all Nissan Commmercial Vehicles,including NV Cargo, NV Passender and NV200 Compact Cargo Vans.\n\n*Based on latest available dealers at time of posting.\n\nTo learn more go to: www.nissanbusinesscertified.com"
        },
        {
          "id": "C_ES",
          "title": "Nissan Express Service Certified Dealer",
          "description": "Nissan Express Service is offered at this dealer. Express Service is the same expert service you trust; now faster and more convenient. And you don't need an appoinment! \nEvery Express Service Oil & Filter change will include a Free Multi-Point Inspection and be completed in 30 minutes or less - or your next Express Service Oil & Filter change is free. It's our promise to you. \nAsk your dealer about other Express Services."
        }
      ],
      "distance": {
        "km": 8.843805180670193,
        "miles": 5.4952840689182185
      }
    },
    {
      "id": "us_en_nissan_NNA5627",
      "dealerId": "NNA5627",
      "name": "NISSAN OF LONG BEACH",
      "marketingGroupId": "803",
      "urlId": "NNA5627",
      "address": {
        "city": "SIGNAL HILL",
        "addressLine1": "1800 SPRING STREET",
        "addressLine2": "",
        "postalCode": "90755",
        "stateCode": "CA",
        "state": "California"
      },
      "geolocation": {
        "longitude": -118.1698337,
        "latitude": 33.8110589
      },
      "contact": {
        "websites": [
          {
            "identifier": "Main",
            "url": "http://www.nissanoflongbeach.com/"
          },
          {
            "identifier": "One To One Online Service Scheduling",
            "url": "http://consumer.xtime.com/scheduling/?webKey=nis201611281158335627xx1"
          }
        ],
        "website": "http://www.nissanoflongbeach.com/",
        "phone": "(800) 973-3689"
      },
      "canAcceptLeads": true,
      "hasDealerWebsite": false,
      "services": [
        {
          "id": "us_en_nissan_S_SLS"
        },
        {
          "id": "us_en_nissan_S_SVC"
        },
        {
          "id": "us_en_nissan_S_GTR"
        },
        {
          "id": "us_en_nissan_S_CPO"
        },
        {
          "id": "us_en_nissan_S_RNTL"
        },
        {
          "id": "us_en_nissan_S_OS"
        }
      ],
      "certifications": [
        {
          "id": "C_IC",
          "title": "Nissan Internet Certified Dealer",
          "description": "A Nissan Internet Certified Dealer has been recognized for achievement in online customer relations. Internet Certified Dealers are continually measured against performance criteria including response time to e-mail inquiries, customer survey results and overall quality of communications. \r\nNissan will continually strive to deliver an online shopping experience that exceeds your expectations."
        },
        {
          "id": "C_GTR",
          "title": "Nissan GT-R Dealer",
          "description": "This Dealer is certified to sell and fully service the Nissan GT-R. \r\nBased on latest available list of certified dealers at the time of posting."
        }
      ],
      "distance": {
        "km": 16.070894584357198,
        "miles": 9.985987838776616
      }
    },
    {
      "id": "us_en_nissan_NNA5154",
      "dealerId": "NNA5154",
      "name": "DOWNEY NISSAN",
      "marketingGroupId": "803",
      "urlId": "NNA5154",
      "address": {
        "city": "DOWNEY",
        "addressLine1": "7550 FIRESTONE BLVD",
        "addressLine2": "",
        "postalCode": "90241",
        "stateCode": "CA",
        "state": "California"
      },
      "geolocation": {
        "longitude": -118.145342,
        "latitude": 33.946671
      },
      "contact": {
        "websites": [
          {
            "identifier": "Main",
            "url": "http://www.downeynissan.com/"
          },
          {
            "identifier": "One To One Online Service Scheduling",
            "url": "http://consumer.xtime.com/scheduling/?webKey=nis2011120803175154"
          }
        ],
        "phone": "(562) 334-1090"
      },
      "canAcceptLeads": true,
      "hasDealerWebsite": false,
      "services": [
        {
          "id": "us_en_nissan_S_SLS"
        },
        {
          "id": "us_en_nissan_S_SVC"
        },
        {
          "id": "us_en_nissan_S_LF"
        },
        {
          "id": "us_en_nissan_S_GTR"
        },
        {
          "id": "us_en_nissan_S_CPO"
        },
        {
          "id": "us_en_nissan_S_RNTL"
        },
        {
          "id": "us_en_nissan_S_ES"
        },
        {
          "id": "us_en_nissan_P_O2O"
        },
        {
          "id": "us_en_nissan_S_OS"
        }
      ],
      "awards": [
        {
          "id": "A_WHLSL",
          "title": "Nissan Wholesale Retailer",
          "description": "Genuine Nissan Parts are sold by this dealer via the Wholesale Chanel.\nGenuine Nissan Parts deliver model-specific engineering, perfect fit, reliability, and like new performance.\nGenuine Nissan Parts fit the first time, helping your customers save time and money.\nBased on latest available dealers at time of posting."
        }
      ],
      "certifications": [
        {
          "id": "C_CP",
          "title": "Customer Promise Certified Dealer",
          "description": "At Nissan, we beelive the treatment you receive is just as important as the vehicle you own.\n\nThe Nissan Customer Promise Certification means this dealr is committed to giving you the best customer service possible."
        },
        {
          "id": "C_IC",
          "title": "Nissan Internet Certified Dealer",
          "description": "A Nissan Internet Certified Dealer has been recognized for achievement in online customer relations. Internet Certified Dealers are continually measured against performance criteria including response time to e-mail inquiries, customer survey results and overall quality of communications. \nNissan will continually strive to deliver an online shopping experience that exceeds your expectations."
        },
        {
          "id": "C_LF",
          "title": "Nissan LEAF® Dealer",
          "description": "This Dealer is certified to sell and fully service the Nissan LEAF.\n*Based on latest available list of certified dealers at the time of posting."
        },
        {
          "id": "C_GTR",
          "title": "Nissan GT-R Dealer",
          "description": "This Dealer is certified to sell and fully service the Nissan GT-R. \nBased on latest available list of certified dealers at the time of posting."
        },
        {
          "id": "C_ES",
          "title": "Nissan Express Service Certified Dealer",
          "description": "Nissan Express Service is offered at this dealer. Express Service is the same expert service you trust; now faster and more convenient. And you don't need an appoinment! \nEvery Express Service Oil & Filter change will include a Free Multi-Point Inspection and be completed in 30 minutes or less - or your next Express Service Oil & Filter change is free. It's our promise to you. \nAsk your dealer about other Express Services."
        }
      ],
      "distance": {
        "km": 21.878242751931165,
        "miles": 13.594505577010219
      }
    },
    {
      "id": "us_en_nissan_NNA3387",
      "dealerId": "NNA3387",
      "name": "CERRITOS NISSAN",
      "marketingGroupId": "803",
      "urlId": "NNA3387",
      "address": {
        "city": "CERRITOS",
        "addressLine1": "18707 STUDEBAKER RD",
        "addressLine2": "",
        "postalCode": "90703",
        "stateCode": "CA",
        "state": "California"
      },
      "geolocation": {
        "longitude": -118.099713,
        "latitude": 33.861512
      },
      "contact": {
        "websites": [
          {
            "identifier": "Main",
            "url": "http://www.cerritosnissan.com/"
          }
        ],
        "phone": "(562) 402-2277"
      },
      "canAcceptLeads": true,
      "hasDealerWebsite": false,
      "services": [
        {
          "id": "us_en_nissan_S_SLS"
        },
        {
          "id": "us_en_nissan_S_SVC"
        },
        {
          "id": "us_en_nissan_S_LF"
        },
        {
          "id": "us_en_nissan_S_GTR"
        },
        {
          "id": "us_en_nissan_S_BC"
        },
        {
          "id": "us_en_nissan_S_CPO"
        },
        {
          "id": "us_en_nissan_S_GP"
        },
        {
          "id": "us_en_nissan_S_CLSN"
        }
      ],
      "awards": [
        {
          "id": "A_GAE",
          "title": "Nissan Global Award of Excellence",
          "description": "Dealers who achieve Nissan Award of Excellence are ranked nationally and the Top 50 dealers are awarded the Nissan Global Award.\nThis award is from Nissan Motor Company, LTD in Japan and is given to elite dealerships across the world."
        },
        {
          "id": "A_OF",
          "title": "Nissan Owner First Award of Excellence",
          "description": "The Nissan Owner First Award of Excellence is the highest award presented by Nissan North America to our Dealers.\nThis award recognized Nissan's top dealers from across the nation who were able to meet the high standards of achievement for the Owner First Award of Excellence. It recognizes those dealerships that embody the philosophy and vision for Nissan Owner First Award of Excellence, that is, to endeavour to provide our customers with an outstanding ownership\nexperience, form the showroom through every aspect of the dealership. Basically, putting our owners first.\n\nScores for Dealerships were measured on a multitude of criteria including Nissan's Owner customer following the purchase of a new Nissan vehicle or service on their current Nissan.\n\nThe Nissan Owner First Award of Excellence dealers are recognized for consistently living up to the high standards of Excellence."
        },
        {
          "id": "A_WHLSL",
          "title": "Nissan Wholesale Retailer",
          "description": "Genuine Nissan Parts are sold by this dealer via the Wholesale Chanel.\nGenuine Nissan Parts deliver model-specific engineering, perfect fit, reliability, and like new performance.\nGenuine Nissan Parts fit the first time, helping your customers save time and money.\nBased on latest available dealers at time of posting."
        }
      ],
      "certifications": [
        {
          "id": "C_CP",
          "title": "Customer Promise Certified Dealer",
          "description": "At Nissan, we beelive the treatment you receive is just as important as the vehicle you own.\n\nThe Nissan Customer Promise Certification means this dealr is committed to giving you the best customer service possible."
        },
        {
          "id": "C_IC",
          "title": "Nissan Internet Certified Dealer",
          "description": "A Nissan Internet Certified Dealer has been recognized for achievement in online customer relations. Internet Certified Dealers are continually measured against performance criteria including response time to e-mail inquiries, customer survey results and overall quality of communications. \nNissan will continually strive to deliver an online shopping experience that exceeds your expectations."
        },
        {
          "id": "C_LF",
          "title": "Nissan LEAF® Dealer",
          "description": "This Dealer is certified to sell and fully service the Nissan LEAF.\n*Based on latest available list of certified dealers at the time of posting."
        },
        {
          "id": "C_GTR",
          "title": "Nissan GT-R Dealer",
          "description": "This Dealer is certified to sell and fully service the Nissan GT-R. \nBased on latest available list of certified dealers at the time of posting."
        },
        {
          "id": "C_BC",
          "title": "Business Certified Dealer",
          "description": "This Dealer is authorized to sell, offer exclusive commercial incentives and service all Nissan Commmercial Vehicles,including NV Cargo, NV Passender and NV200 Compact Cargo Vans.\n\n*Based on latest available dealers at time of posting.\n\nTo learn more go to: www.nissanbusinesscertified.com"
        }
      ],
      "distance": {
        "km": 22.48739254283589,
        "miles": 13.973013591734482
      }
    },
    {
      "id": "us_en_nissan_NNA249",
      "dealerId": "NNA249",
      "name": "NISSAN OF DOWNTOWN LA",
      "marketingGroupId": "803",
      "urlId": "NNA249",
      "address": {
        "city": "LOS ANGELES",
        "addressLine1": "635 W WASHINGTON BLVD",
        "addressLine2": "",
        "postalCode": "90015",
        "stateCode": "CA",
        "state": "California"
      },
      "geolocation": {
        "longitude": -118.273171,
        "latitude": 34.034892
      },
      "contact": {
        "websites": [
          {
            "identifier": "Main",
            "url": "http://www.downtownnissan.com/"
          },
          {
            "identifier": "One To One Online Service Scheduling",
            "url": "http://consumer.xtime.com/scheduling/?webKey=nis201112080317249"
          }
        ],
        "phone": "(213) 748-4501"
      },
      "canAcceptLeads": true,
      "hasDealerWebsite": false,
      "services": [
        {
          "id": "us_en_nissan_S_SLS"
        },
        {
          "id": "us_en_nissan_S_SVC"
        },
        {
          "id": "us_en_nissan_S_LF"
        },
        {
          "id": "us_en_nissan_S_GTR"
        },
        {
          "id": "us_en_nissan_S_CPO"
        },
        {
          "id": "us_en_nissan_S_RNTL"
        },
        {
          "id": "us_en_nissan_S_ES"
        },
        {
          "id": "us_en_nissan_S_GP"
        },
        {
          "id": "us_en_nissan_P_O2O"
        },
        {
          "id": "us_en_nissan_S_OS"
        }
      ],
      "awards": [
        {
          "id": "A_WHLSL",
          "title": "Nissan Wholesale Retailer",
          "description": "Genuine Nissan Parts are sold by this dealer via the Wholesale Chanel.\nGenuine Nissan Parts deliver model-specific engineering, perfect fit, reliability, and like new performance.\nGenuine Nissan Parts fit the first time, helping your customers save time and money.\nBased on latest available dealers at time of posting."
        }
      ],
      "certifications": [
        {
          "id": "C_CP",
          "title": "Customer Promise Certified Dealer",
          "description": "At Nissan, we beelive the treatment you receive is just as important as the vehicle you own.\n\nThe Nissan Customer Promise Certification means this dealr is committed to giving you the best customer service possible."
        },
        {
          "id": "C_IC",
          "title": "Nissan Internet Certified Dealer",
          "description": "A Nissan Internet Certified Dealer has been recognized for achievement in online customer relations. Internet Certified Dealers are continually measured against performance criteria including response time to e-mail inquiries, customer survey results and overall quality of communications. \nNissan will continually strive to deliver an online shopping experience that exceeds your expectations."
        },
        {
          "id": "C_LF",
          "title": "Nissan LEAF® Dealer",
          "description": "This Dealer is certified to sell and fully service the Nissan LEAF.\n*Based on latest available list of certified dealers at the time of posting."
        },
        {
          "id": "C_GTR",
          "title": "Nissan GT-R Dealer",
          "description": "This Dealer is certified to sell and fully service the Nissan GT-R. \nBased on latest available list of certified dealers at the time of posting."
        },
        {
          "id": "C_ES",
          "title": "Nissan Express Service Certified Dealer",
          "description": "Nissan Express Service is offered at this dealer. Express Service is the same expert service you trust; now faster and more convenient. And you don't need an appoinment! \nEvery Express Service Oil & Filter change will include a Free Multi-Point Inspection and be completed in 30 minutes or less - or your next Express Service Oil & Filter change is free. It's our promise to you. \nAsk your dealer about other Express Services."
        }
      ],
      "distance": {
        "km": 23.009621590002595,
        "miles": 14.297511577001504
      }
    },
    {
      "id": "us_en_nissan_NNA5093",
      "dealerId": "NNA5093",
      "name": "BUENA PARK NISSAN",
      "marketingGroupId": "803",
      "urlId": "NNA5093",
      "address": {
        "city": "BUENA PARK",
        "addressLine1": "6501 AUTO CENTER DRIVE",
        "addressLine2": "",
        "postalCode": "90621",
        "stateCode": "CA",
        "state": "California"
      },
      "geolocation": {
        "longitude": -117.995693,
        "latitude": 33.866157
      },
      "contact": {
        "websites": [
          {
            "identifier": "Main",
            "url": "http://www.buenaparknissan.com/"
          },
          {
            "identifier": "One To One Online Service Scheduling",
            "url": "http://consumer.xtime.com/scheduling/?webKey=nis2011120803175093"
          }
        ],
        "phone": "(714) 739-0800"
      },
      "canAcceptLeads": true,
      "hasDealerWebsite": false,
      "services": [
        {
          "id": "us_en_nissan_S_SLS"
        },
        {
          "id": "us_en_nissan_S_SVC"
        },
        {
          "id": "us_en_nissan_S_LF"
        },
        {
          "id": "us_en_nissan_S_GTR"
        },
        {
          "id": "us_en_nissan_S_BC"
        },
        {
          "id": "us_en_nissan_S_CPO"
        },
        {
          "id": "us_en_nissan_S_RNTL"
        },
        {
          "id": "us_en_nissan_S_GP"
        },
        {
          "id": "us_en_nissan_P_O2O"
        },
        {
          "id": "us_en_nissan_S_OS"
        }
      ],
      "awards": [
        {
          "id": "A_WHLSL",
          "title": "Nissan Wholesale Retailer",
          "description": "Genuine Nissan Parts are sold by this dealer via the Wholesale Chanel.\nGenuine Nissan Parts deliver model-specific engineering, perfect fit, reliability, and like new performance.\nGenuine Nissan Parts fit the first time, helping your customers save time and money.\nBased on latest available dealers at time of posting."
        }
      ],
      "certifications": [
        {
          "id": "C_CP",
          "title": "Customer Promise Certified Dealer",
          "description": "At Nissan, we beelive the treatment you receive is just as important as the vehicle you own.\n\nThe Nissan Customer Promise Certification means this dealr is committed to giving you the best customer service possible."
        },
        {
          "id": "C_IC",
          "title": "Nissan Internet Certified Dealer",
          "description": "A Nissan Internet Certified Dealer has been recognized for achievement in online customer relations. Internet Certified Dealers are continually measured against performance criteria including response time to e-mail inquiries, customer survey results and overall quality of communications. \nNissan will continually strive to deliver an online shopping experience that exceeds your expectations."
        },
        {
          "id": "C_LF",
          "title": "Nissan LEAF® Dealer",
          "description": "This Dealer is certified to sell and fully service the Nissan LEAF.\n*Based on latest available list of certified dealers at the time of posting."
        },
        {
          "id": "C_GTR",
          "title": "Nissan GT-R Dealer",
          "description": "This Dealer is certified to sell and fully service the Nissan GT-R. \nBased on latest available list of certified dealers at the time of posting."
        },
        {
          "id": "C_BC",
          "title": "Business Certified Dealer",
          "description": "This Dealer is authorized to sell, offer exclusive commercial incentives and service all Nissan Commmercial Vehicles,including NV Cargo, NV Passender and NV200 Compact Cargo Vans.\n\n*Based on latest available dealers at time of posting.\n\nTo learn more go to: www.nissanbusinesscertified.com"
        }
      ],
      "distance": {
        "km": 32.09929442975887,
        "miles": 19.9455706791137
      }
    },
    {
      "id": "us_en_nissan_NNA042B",
      "dealerId": "NNA042B",
      "name": "UNIVERSAL CITY NISSAN",
      "marketingGroupId": "803",
      "urlId": "NNA042B",
      "address": {
        "city": "LOS ANGELES",
        "addressLine1": "3550 CAHUENGA BLVD W",
        "addressLine2": "",
        "postalCode": "90068",
        "stateCode": "CA",
        "state": "California"
      },
      "geolocation": {
        "longitude": -118.35725,
        "latitude": 34.133601
      },
      "contact": {
        "websites": [
          {
            "identifier": "Main",
            "url": "http://www.universalcitynissan.com/"
          },
          {
            "identifier": "One To One Online Service Scheduling",
            "url": "http://consumer.xtime.com/scheduling/?webKey=unvrsalctynissan"
          }
        ],
        "phone": "(818) 769-8100"
      },
      "canAcceptLeads": true,
      "hasDealerWebsite": false,
      "services": [
        {
          "id": "us_en_nissan_S_SLS"
        },
        {
          "id": "us_en_nissan_S_SVC"
        },
        {
          "id": "us_en_nissan_S_LF"
        },
        {
          "id": "us_en_nissan_S_GTR"
        },
        {
          "id": "us_en_nissan_S_BC"
        },
        {
          "id": "us_en_nissan_S_CPO"
        },
        {
          "id": "us_en_nissan_S_RNTL"
        },
        {
          "id": "us_en_nissan_S_ES"
        },
        {
          "id": "us_en_nissan_S_GP"
        },
        {
          "id": "us_en_nissan_P_O2O"
        },
        {
          "id": "us_en_nissan_S_OS"
        }
      ],
      "awards": [
        {
          "id": "A_GAE",
          "title": "Nissan Global Award of Excellence",
          "description": "Dealers who achieve Nissan Award of Excellence are ranked nationally and the Top 50 dealers are awarded the Nissan Global Award.\nThis award is from Nissan Motor Company, LTD in Japan and is given to elite dealerships across the world."
        },
        {
          "id": "A_OF",
          "title": "Nissan Owner First Award of Excellence",
          "description": "The Nissan Owner First Award of Excellence is the highest award presented by Nissan North America to our Dealers.\nThis award recognized Nissan's top dealers from across the nation who were able to meet the high standards of achievement for the Owner First Award of Excellence. It recognizes those dealerships that embody the philosophy and vision for Nissan Owner First Award of Excellence, that is, to endeavour to provide our customers with an outstanding ownership\nexperience, form the showroom through every aspect of the dealership. Basically, putting our owners first.\n\nScores for Dealerships were measured on a multitude of criteria including Nissan's Owner customer following the purchase of a new Nissan vehicle or service on their current Nissan.\n\nThe Nissan Owner First Award of Excellence dealers are recognized for consistently living up to the high standards of Excellence."
        },
        {
          "id": "A_WHLSL",
          "title": "Nissan Wholesale Retailer",
          "description": "Genuine Nissan Parts are sold by this dealer via the Wholesale Chanel.\nGenuine Nissan Parts deliver model-specific engineering, perfect fit, reliability, and like new performance.\nGenuine Nissan Parts fit the first time, helping your customers save time and money.\nBased on latest available dealers at time of posting."
        }
      ],
      "certifications": [
        {
          "id": "C_CP",
          "title": "Customer Promise Certified Dealer",
          "description": "At Nissan, we beelive the treatment you receive is just as important as the vehicle you own.\n\nThe Nissan Customer Promise Certification means this dealr is committed to giving you the best customer service possible."
        },
        {
          "id": "C_IC",
          "title": "Nissan Internet Certified Dealer",
          "description": "A Nissan Internet Certified Dealer has been recognized for achievement in online customer relations. Internet Certified Dealers are continually measured against performance criteria including response time to e-mail inquiries, customer survey results and overall quality of communications. \nNissan will continually strive to deliver an online shopping experience that exceeds your expectations."
        },
        {
          "id": "C_LF",
          "title": "Nissan LEAF® Dealer",
          "description": "This Dealer is certified to sell and fully service the Nissan LEAF.\n*Based on latest available list of certified dealers at the time of posting."
        },
        {
          "id": "C_GTR",
          "title": "Nissan GT-R Dealer",
          "description": "This Dealer is certified to sell and fully service the Nissan GT-R. \nBased on latest available list of certified dealers at the time of posting."
        },
        {
          "id": "C_BC",
          "title": "Business Certified Dealer",
          "description": "This Dealer is authorized to sell, offer exclusive commercial incentives and service all Nissan Commmercial Vehicles,including NV Cargo, NV Passender and NV200 Compact Cargo Vans.\n\n*Based on latest available dealers at time of posting.\n\nTo learn more go to: www.nissanbusinesscertified.com"
        },
        {
          "id": "C_ES",
          "title": "Nissan Express Service Certified Dealer",
          "description": "Nissan Express Service is offered at this dealer. Express Service is the same expert service you trust; now faster and more convenient. And you don't need an appoinment! \nEvery Express Service Oil & Filter change will include a Free Multi-Point Inspection and be completed in 30 minutes or less - or your next Express Service Oil & Filter change is free. It's our promise to you. \nAsk your dealer about other Express Services."
        }
      ],
      "distance": {
        "km": 33.16253790138421,
        "miles": 20.606239338321007
      }
    },
    {
      "id": "us_en_nissan_NNA3341",
      "dealerId": "NNA3341",
      "name": "GLENDALE NISSAN",
      "marketingGroupId": "803",
      "urlId": "NNA3341",
      "address": {
        "city": "GLENDALE",
        "addressLine1": "727 S BRAND BLVD",
        "addressLine2": "",
        "postalCode": "91204",
        "stateCode": "CA",
        "state": "California"
      },
      "geolocation": {
        "longitude": -118.2549856,
        "latitude": 34.137084
      },
      "contact": {
        "websites": [
          {
            "identifier": "Main",
            "url": "http://www.nissan1.com"
          },
          {
            "identifier": "One To One Online Service Scheduling",
            "url": "http://consumer.xtime.com/scheduling/?webKey=glendalenissan"
          }
        ],
        "phone": "(818) 240-6000"
      },
      "canAcceptLeads": true,
      "hasDealerWebsite": false,
      "services": [
        {
          "id": "us_en_nissan_S_SLS"
        },
        {
          "id": "us_en_nissan_S_SVC"
        },
        {
          "id": "us_en_nissan_S_LF"
        },
        {
          "id": "us_en_nissan_S_GTR"
        },
        {
          "id": "us_en_nissan_S_BC"
        },
        {
          "id": "us_en_nissan_S_CPO"
        },
        {
          "id": "us_en_nissan_S_RNTL"
        },
        {
          "id": "us_en_nissan_S_ES"
        },
        {
          "id": "us_en_nissan_S_GP"
        },
        {
          "id": "us_en_nissan_P_O2O"
        },
        {
          "id": "us_en_nissan_S_OS"
        }
      ],
      "awards": [
        {
          "id": "A_WHLSL",
          "title": "Nissan Wholesale Retailer",
          "description": "Genuine Nissan Parts are sold by this dealer via the Wholesale Chanel.\nGenuine Nissan Parts deliver model-specific engineering, perfect fit, reliability, and like new performance.\nGenuine Nissan Parts fit the first time, helping your customers save time and money.\nBased on latest available dealers at time of posting."
        }
      ],
      "certifications": [
        {
          "id": "C_CP",
          "title": "Customer Promise Certified Dealer",
          "description": "At Nissan, we beelive the treatment you receive is just as important as the vehicle you own.\n\nThe Nissan Customer Promise Certification means this dealr is committed to giving you the best customer service possible."
        },
        {
          "id": "C_IC",
          "title": "Nissan Internet Certified Dealer",
          "description": "A Nissan Internet Certified Dealer has been recognized for achievement in online customer relations. Internet Certified Dealers are continually measured against performance criteria including response time to e-mail inquiries, customer survey results and overall quality of communications. \nNissan will continually strive to deliver an online shopping experience that exceeds your expectations."
        },
        {
          "id": "C_LF",
          "title": "Nissan LEAF® Dealer",
          "description": "This Dealer is certified to sell and fully service the Nissan LEAF.\n*Based on latest available list of certified dealers at the time of posting."
        },
        {
          "id": "C_GTR",
          "title": "Nissan GT-R Dealer",
          "description": "This Dealer is certified to sell and fully service the Nissan GT-R. \nBased on latest available list of certified dealers at the time of posting."
        },
        {
          "id": "C_BC",
          "title": "Business Certified Dealer",
          "description": "This Dealer is authorized to sell, offer exclusive commercial incentives and service all Nissan Commmercial Vehicles,including NV Cargo, NV Passender and NV200 Compact Cargo Vans.\n\n*Based on latest available dealers at time of posting.\n\nTo learn more go to: www.nissanbusinesscertified.com"
        },
        {
          "id": "C_ES",
          "title": "Nissan Express Service Certified Dealer",
          "description": "Nissan Express Service is offered at this dealer. Express Service is the same expert service you trust; now faster and more convenient. And you don't need an appoinment! \nEvery Express Service Oil & Filter change will include a Free Multi-Point Inspection and be completed in 30 minutes or less - or your next Express Service Oil & Filter change is free. It's our promise to you. \nAsk your dealer about other Express Services."
        }
      ],
      "distance": {
        "km": 34.44381282410912,
        "miles": 21.402386418329513
      }
    },
    {
      "id": "us_en_nissan_NNA5466",
      "dealerId": "NNA5466",
      "name": "IMPERIO NISSAN OF GARDEN GROVE",
      "marketingGroupId": "803",
      "urlId": "NNA5466",
      "address": {
        "city": "GARDEN GROVE",
        "addressLine1": "9222 TRASK AVE",
        "addressLine2": "",
        "postalCode": "92844",
        "stateCode": "CA",
        "state": "California"
      },
      "geolocation": {
        "longitude": -117.9676479,
        "latitude": 33.7663569
      },
      "contact": {
        "websites": [
          {
            "identifier": "Main",
            "url": ""
          },
          {
            "identifier": "One To One Online Service Scheduling",
            "url": "http://consumer.xtime.com/scheduling/?webKey=nis201501231329595466"
          }
        ],
        "phone": "(714) 537-0900"
      },
      "canAcceptLeads": true,
      "hasDealerWebsite": false,
      "services": [
        {
          "id": "us_en_nissan_S_SLS"
        },
        {
          "id": "us_en_nissan_S_SVC"
        },
        {
          "id": "us_en_nissan_S_GTR"
        },
        {
          "id": "us_en_nissan_S_CPO"
        },
        {
          "id": "us_en_nissan_S_ES"
        },
        {
          "id": "us_en_nissan_S_GP"
        },
        {
          "id": "us_en_nissan_P_O2O"
        },
        {
          "id": "us_en_nissan_S_OS"
        }
      ],
      "certifications": [
        {
          "id": "C_CP",
          "title": "Customer Promise Certified Dealer",
          "description": "At Nissan, we beelive the treatment you receive is just as important as the vehicle you own.\r\n\r\nThe Nissan Customer Promise Certification means this dealr is committed to giving you the best customer service possible."
        },
        {
          "id": "C_IC",
          "title": "Nissan Internet Certified Dealer",
          "description": "A Nissan Internet Certified Dealer has been recognized for achievement in online customer relations. Internet Certified Dealers are continually measured against performance criteria including response time to e-mail inquiries, customer survey results and overall quality of communications. \r\nNissan will continually strive to deliver an online shopping experience that exceeds your expectations."
        },
        {
          "id": "C_GTR",
          "title": "Nissan GT-R Dealer",
          "description": "This Dealer is certified to sell and fully service the Nissan GT-R. \r\nBased on latest available list of certified dealers at the time of posting."
        },
        {
          "id": "C_ES",
          "title": "Nissan Express Service Certified Dealer",
          "description": "Nissan Express Service is offered at this dealer. Express Service is the same expert service you trust; now faster and more convenient. And you don't need an appoinment! \r\nEvery Express Service Oil & Filter change will include a Free Multi-Point Inspection and be completed in 30 minutes or less - or your next Express Service Oil & Filter change is free. It's our promise to you. \r\nAsk your dealer about other Express Services."
        }
      ],
      "distance": {
        "km": 35.39559679245988,
        "miles": 21.993797374527585
      }
    }
  ]
}

axios.get(`https://dl-react.firebaseio.com/dealers.json`)
.then(res => {
    const dealers = res.data;
    console.log(dealers);
});


const porjectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_DEALER':
        break;

        default:
    }
    return state;
}

export default porjectReducer;
