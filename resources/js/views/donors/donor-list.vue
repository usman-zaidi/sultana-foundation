<template>

        <CCol :md="12">
            <CCard>
                <CCardHeader>
                    <h3>Donors List</h3>
                </CCardHeader>
                <CCardBody class="p-4">
                        <DataTable class="display" style="overflow: scroll" id="example">
                            <thead>
                            <tr>
                                <th>Sr. No</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Blood Group</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1</td>
                                <td>Ali</td>
                                <td>ali@gmail.com</td>
                                <td>A+</td>
                                <td>
                                    <router-link to="/donors/donor-profile/+${id}"><font-awesome-icon icon="fa-solid fa-eye"  size="md" class="p-2"/></router-link>
                                    <a href=""><font-awesome-icon icon="fa-solid fa-pen-to-square" class="p-2"/></a>
                                    <a href=""><font-awesome-icon icon="fa-solid fa-delete-left" class="p-2"/></a>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Wasim</td>
                                <td>wasim@gmail.com</td>
                                <td>O+</td>
                                <td>
                                    <router-link to="/donors/donor-profile/+${id}"><font-awesome-icon icon="fa-solid fa-eye"  size="md" class="p-2"/></router-link>
                                    <a href=""><font-awesome-icon icon="fa-solid fa-pen-to-square" class="p-2"/></a>
                                    <a href=""><font-awesome-icon icon="fa-solid fa-delete-left" class="p-2"/></a>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Usman</td>
                                <td>usman@gmail.com</td>
                                <td>O+</td>
                                <td>
                                    <router-link to="/donors/donor-profile/+${id}"><font-awesome-icon icon="fa-solid fa-eye"  size="md" class="p-2"/></router-link>
                                    <a href=""><font-awesome-icon icon="fa-solid fa-pen-to-square" class="p-2"/></a>
                                    <a href=""><font-awesome-icon icon="fa-solid fa-delete-left" class="p-2"/></a>
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Adil</td>
                                <td>adil@gmail.com</td>
                                <td>B-</td>
                                <td>
                                    <router-link to="/donors/donor-profile/+${id}"><font-awesome-icon icon="fa-solid fa-eye"  size="md" class="p-2"/></router-link>
                                    <a href=""><font-awesome-icon icon="fa-solid fa-pen-to-square" class="p-2"/></a>
                                    <a href=""><font-awesome-icon icon="fa-solid fa-delete-left" class="p-2"/></a>
                                   </td>
                            </tr>


                            </tbody>
                        </DataTable>
                </CCardBody>
            </CCard>
        </CCol>

</template>

<script>
import DataTable from 'datatables.net-vue3';

export default {
    name: "donor-list",
    data(){
        return {
            id:'2',
        }
    },
    components: {
        DataTable,
    }
}
</script>

<style scoped>

</style>
