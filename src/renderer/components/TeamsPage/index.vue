<template>
    <div>
        <md-tabs>
            <md-tab id="tab-list" md-label="Team List">
                <md-table>
                    <md-table-row>
                        <md-table-head>Team #</md-table-head>
                        <md-table-head>Team Name</md-table-head>
                        <md-table-head>Checked In</md-table-head>
                        <md-table-head>Judging State</md-table-head>
                        <md-table-head>HW Inspection</md-table-head>
                        <md-table-head>Field Inspection</md-table-head>
                    </md-table-row>

                    <md-table-row v-for="team in teams" :key="team.number">
                        <md-table-cell md-numberic>{{team.number}}</md-table-cell>
                        <md-table-cell>{{team.name}}</md-table-cell>
                        <md-table-cell><md-checkbox v-model="team.checkedIn"/></md-table-cell>
                        <md-table-cell>{{team.judging.state}}</md-table-cell>
                        <md-table-cell>{{team.hwInspection.state}}</md-table-cell>
                        <md-table-cell>{{team.fieldInspection.state}}</md-table-cell>
                    </md-table-row>
                </md-table>
            </md-tab>
            <md-tab id="tab-print" md-label="Print Team List">

            </md-tab>
        </md-tabs>
    </div>
</template>

<script>
export default {
    data: () => ({
        checked: true,
        teams: [
            {
                number: 1234,
                name: 'team name',
                checkedIn: true,
                judging: {
                    state: 'finished',
                    time: '10:05am'
                },
                hwInspection: {
                    state: 'passed',
                    timeAssigned: '10:30am',
                    timePassed: '11:00am',
                    inspector: 'vens',
                    notes: 'did not fit in sizing box'
                },
                fieldInspection: {
                    state: 'passed',
                    timeAssigned: '11:00am',
                    timePassed: '10:45am',
                    inspector: 'emma',
                    notes: ''
                }
            },
            {
                number: 1234,
                name: 'team name',
                checkedIn: true,
                judging: {
                    state: 'finished',
                    time: '10:05am'
                },
                hwInspection: {
                    state: 'passed',
                    timeAssigned: '10:30am',
                    timePassed: '11:00am',
                    inspector: 'vens',
                    notes: 'did not fit in sizing box'
                },
                fieldInspection: {
                    state: 'passed',
                    timeAssigned: '11:00am',
                    timePassed: '10:45am',
                    inspector: 'emma',
                    notes: ''
                }
            },
            {
                number: 1234,
                name: 'team name',
                checkedIn: true,
                judging: {
                    state: 'finished',
                    time: '10:05am'
                },
                hwInspection: {
                    state: 'passed',
                    timeAssigned: '10:30am',
                    timePassed: '11:00am',
                    inspector: 'vens',
                    notes: 'did not fit in sizing box'
                },
                fieldInspection: {
                    state: 'passed',
                    timeAssigned: '11:00am',
                    timePassed: '10:45am',
                    inspector: 'emma',
                    notes: ''
                }
            },
            {
                number: 1234,
                name: 'team name',
                checkedIn: true,
                judging: {
                    state: 'finished',
                    time: '10:05am'
                },
                hwInspection: {
                    state: 'passed',
                    timeAssigned: '10:30am',
                    timePassed: '11:00am',
                    inspector: 'vens',
                    notes: 'did not fit in sizing box'
                },
                fieldInspection: {
                    state: 'passed',
                    timeAssigned: '11:00am',
                    timePassed: '10:45am',
                    inspector: 'emma',
                    notes: ''
                }
            }
        ]
    })
}
</script>

<style>

</style>
