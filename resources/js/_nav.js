export default [
  {
    component: 'CNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: 'cil-speedometer',
    badge: {
      color: 'primary',
      text: 'NEW',
    },
  },

    {
        component: 'CNavGroup',
        name: 'Walking Donor',
        to: '/walking-donor',
        icon: 'cil-puzzle',
        items: [
            {
                component: 'CNavItem',
                name: 'Add Donor',
                to: '/walking-donor/add-donor',
            },
        ],
    },

    {
        component: 'CNavGroup',
        name: 'Patient',
        to: '/patient',
        icon: 'cil-puzzle',
        items: [
            {
                component: 'CNavItem',
                name: 'AddPatient',
                to: '/patient/add-patient',
            },
        ],
    },

    {
        component: 'CNavGroup',
        name: 'Blood',
        to: '/blood',
        icon: 'cil-puzzle',
        items: [
            {
                component: 'CNavItem',
                name: 'Add Blood Screening',
                to: '/blood/add-blood-screening',
            },
        ],
    },


]
