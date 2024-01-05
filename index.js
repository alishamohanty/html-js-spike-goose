
document.addEventListener('DOMContentLoaded', (event) => {
    table = document.getElementById("jobs-table")

    // Enable the action buttons when one of them is selected
    table.addEventListener("change", (event) => {
        const checkboxes = document.querySelectorAll('#jobs-table input[type="checkbox"]');
        const isAnyChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);

        console.log("isAnyChecked: " , isAnyChecked)

        document.getElementById('delete').disabled = !isAnyChecked;
    })
})

function delete_jobs ()
{
    const selectedJobs = [];
    const job_ids = [];

    const checkboxes = document.querySelectorAll('#jobs-table input[type="checkbox"]:checked');
    checkboxes.forEach(checkbox => {
      const jobData = checkbox.closest('tr').dataset.job;
      const job = JSON.parse(jobData)
      selectedJobs.push(job);
      job_ids.push(job["id"])
    });

    console.log(selectedJobs, "will be sent to API to be deleted")


    const alert_msg = job_ids+ " will be deleted!! (check console)"
    alert(alert_msg)
}
