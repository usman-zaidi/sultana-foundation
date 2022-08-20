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

        name: 'Donors',
        to: '/donors',
        icon: 'cil-puzzle',
        items: [
            {
                component: 'CNavItem',
                name: 'Add Donors',
                to: '/donors/add-donors',
            },
            {
                component: 'CNavItem',
                name: 'Add Blood Sample Detail',
                to: '/donors/add-blood-sample',
            },
            {
                component: 'CNavItem',
                name: 'Add Blood Collection',
                to: '/donors/add-blood-collection',
            },
            {
                component: 'CNavItem',
                name: 'Add Serology',
                to: '/donors/add-serology',
            },
            {
                component: 'CNavItem',
                name: 'Add Question',
                to: '/donors/add-question',
            },
            {
                component: 'CNavItem',
                name: 'Donor List',
                to: '/donors/donor-list',
            },
        ],
    },

    {
        component: 'CNavGroup',
        name: 'Test',
        to: '/test',
        icon: 'cil-puzzle',
        items: [
            {
                component: 'CNavItem',
                name: 'Add Test',
                to: '/test/add-test',
            },
            {
                component: 'CNavItem',
                name: 'Add Test Column',
                to: '/test/add-test-Column',
            },
            {
                component: 'CNavItem',
                name: 'Add Test Attributes',
                to: '/test/add-test-attributes',
            },
        ],
    },
    {
        component: 'CNavGroup',
        name: 'Patient',
        to: '/patient',
        icon: 'cil-user',
        items: [
            {
                component: 'CNavItem',
                name: 'Add Patient',
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
