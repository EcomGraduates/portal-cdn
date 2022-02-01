var jobsModal = document.getElementById('jobsModal')
jobsModal.addEventListener('show.bs.modal', function (event) {


    var button = event.relatedTarget
    var elements = document.querySelectorAll('li.event');
    elements.forEach(function (ele) {
        ele.classList.remove('completed', 'in-progress', 'pending');
    });
    //status badge function for class and text
    function getStatus(badge, status) {


        // var statusBadge = document.querySelector(badge);
        let status_text, status_class, status_liClass;
        if (status == 'in progress') {
            status_text = 'in progress';
            status_class = 'bg-warning';
            status_liClass = 'in-progress';
            badge.classList.remove('bg-success', 'bg-dark');
        }
        if (status == 'completed') {
            status_text = 'completed';
            status_class = 'bg-success';
            status_liClass = 'completed';
            badge.classList.remove('bg-warning', 'bg-dark');
        }
        if (status == 'pending') {
            status_text = 'pending';
            status_class = 'bg-dark';
            status_liClass = 'pending';
            badge.classList.remove('bg-warning', 'bg-success');
        }
        return {
            status_text,
            status_class,
            status_liClass
        };
    }

    // job number
    var job_number = button.getAttribute('data-job_number')
    var jobNumber = jobsModal.querySelector('.job-number')
    jobNumber.textContent = '#' + job_number;

    //store url
    var store_url = button.getAttribute('data-store_url')

    //customer information
    var customer_name = button.getAttribute('data-customer_name')
    var customer_email = button.getAttribute('data-customer_email')

    //job title
    var job_title = button.getAttribute('data-job_title')
    var modalTitle = jobsModal.querySelector('.modal-title')
    modalTitle.textContent = job_title;

    //job status
    var job_status = button.getAttribute('data-job_status')
    var jobstatusBadge = jobsModal.querySelector('.job-status')
    var jobStatuses = getStatus(jobstatusBadge, job_status);
    jobstatusBadge.classList.add(jobStatuses.status_class);
    jobstatusBadge.textContent = jobStatuses.status_text;

    //meeting
    //status
    var meeting = jobsModal.querySelector('.meeting')
    var meeting_status = button.getAttribute('data-meeting_status')
    var meetingBadge = meeting.querySelector("span.badge");
    var meetingStatuses = getStatus(meetingBadge, meeting_status);
    meeting.classList.add(meetingStatuses.status_liClass);
    meetingBadge.classList.add(meetingStatuses.status_class);
    meetingBadge.textContent = meetingStatuses.status_text;
    //date
    var meeting_date = button.getAttribute('data-meeting_date')
    meeting.setAttribute("data-date", meeting_date)
    //info
    var meeting_info = button.getAttribute('data-meeting_info')
    var meetingInfo = meeting.querySelector("p");
    meetingInfo.innerHTML = meeting_info;

    //proposal start
    //status
    var proposalStart = jobsModal.querySelector('.proposal-start')
    var proposal_started_status = button.getAttribute('data-proposal_started_status')
    var proposalStartBadge = proposalStart.querySelector("span.badge");
    var proposalStartStatuses = getStatus(proposalStartBadge, proposal_started_status);
    proposalStart.classList.add(proposalStartStatuses.status_liClass);
    proposalStartBadge.classList.add(proposalStartStatuses.status_class);
    proposalStartBadge.textContent = proposalStartStatuses.status_text;
    //date
    var proposal_started_date = button.getAttribute('data-proposal_started_date')
    proposalStart.setAttribute("data-date", proposal_started_date)
    //info
    var proposal_started_info = button.getAttribute('data-proposal_started_info')
    var proposalStartInfo = proposalStart.querySelector("p");
    proposalStartInfo.innerHTML = proposal_started_info;

    //proposal End
    //status
    var proposalEnd = jobsModal.querySelector('.proposal-end')
    var proposal_ended_status = button.getAttribute('data-proposal_ended_status')
    var proposalEndBadge = proposalEnd.querySelector("span.badge");
    var proposalEndStatuses = getStatus(proposalEndBadge, proposal_ended_status);
    proposalEnd.classList.add(proposalEndStatuses.status_liClass);
    proposalEndBadge.classList.add(proposalEndStatuses.status_class);
    proposalEndBadge.textContent = proposalEndStatuses.status_text;
    //date
    var proposal_ended_date = button.getAttribute('data-proposal_ended_date')
    proposalEnd.setAttribute("data-date", proposal_ended_date)
    //info
    var proposal_ended_info = button.getAttribute('data-proposal_ended_info')
    var proposalEndInfo = proposalEnd.querySelector("p");
    proposalEndInfo.innerHTML = proposal_ended_info;
    //signed date
    var proposalEndSigned = proposalEnd.querySelector("div > span")
    var proposal_ended_approved_date = button.getAttribute('data-proposal_ended_approved_date')
    proposalEndSigned.innerHTML = proposal_ended_approved_date;
    //link
    var proposalEndLink = proposalEnd.querySelector("a")
    var proposal_ended_link = button.getAttribute('data-proposal_ended_link')
    proposalEndLink.href = proposal_ended_link

    //deposit payment
    //status
    var deposit = jobsModal.querySelector('.deposit')
    var deposit_status = button.getAttribute('data-deposit_payment_status')
    var depositBadge = deposit.querySelector("span.badge");
    var depositStatuses = getStatus(depositBadge, deposit_status);
    deposit.classList.add(depositStatuses.status_liClass);
    depositBadge.classList.add(depositStatuses.status_class);
    depositBadge.textContent = depositStatuses.status_text;
    //date
    var deposit_payment_date = button.getAttribute('data-deposit_payment_date')
    deposit.setAttribute("data-date", deposit_payment_date)
    //info
    var deposit_payment_info = button.getAttribute('data-deposit_payment_info')
    var depositInfo = deposit.querySelector("p");
    depositInfo.innerHTML = deposit_payment_info;
    // var deposit_payment_status = button.getAttribute('data-deposit_payment_status')
    // var deposit_payment_info = button.getAttribute('data-deposit_payment_info')

    //design start
    //status
    var designStart = jobsModal.querySelector('.design-start')
    var design_started_status = button.getAttribute('data-design_started_status')
    var designStartBadge = designStart.querySelector("span.badge");
    var designStartStatuses = getStatus(designStartBadge, design_started_status);
    designStart.classList.add(designStartStatuses.status_liClass);
    designStartBadge.classList.add(designStartStatuses.status_class);
    designStartBadge.textContent = designStartStatuses.status_text;
    //date
    var design_started_date = button.getAttribute('data-design_started_date')
    designStart.setAttribute("data-date", design_started_date)
    //info
    var design_started_info = button.getAttribute('data-design_started_info')
    var designStartInfo = designStart.querySelector("p");
    designStartInfo.innerHTML = design_started_info;


    //design End
    //status
    var designEnd = jobsModal.querySelector('.design-end')
    var design_ended_status = button.getAttribute('data-design_ended_status')
    var designEndBadge = designEnd.querySelector("span.badge");
    var designEndStatuses = getStatus(designEndBadge, design_ended_status);
    designEnd.classList.add(designEndStatuses.status_liClass);
    designEndBadge.classList.add(designEndStatuses.status_class);
    designEndBadge.textContent = designEndStatuses.status_text;
    //date
    var design_ended_date = button.getAttribute('data-design_ended_date')
    designEnd.setAttribute("data-date", design_ended_date)
    //info
    var design_ended_info = button.getAttribute('data-design_ended_info')
    var designEndInfo = designEnd.querySelector("p");
    designEndInfo.innerHTML = design_ended_info;
    //signed date
    var designEndSigned = designEnd.querySelector("div > span")
    var design_ended_approved_date = button.getAttribute('data-design_ended_approved_date')
    designEndSigned.innerHTML = design_ended_approved_date;
    //link
    var designEndLink = designEnd.querySelector("a")
    var design_ended_link = button.getAttribute('data-design_ended_link')
    designEndLink.href = design_ended_link

    //development start
    //status
    var developmentStart = jobsModal.querySelector('.development-start')
    var development_started_status = button.getAttribute('data-development_started_status')
    var developmentStartBadge = developmentStart.querySelector("span.badge");
    var developmentStartStatuses = getStatus(developmentStartBadge, development_started_status);
    developmentStart.classList.add(developmentStartStatuses.status_liClass);
    developmentStartBadge.classList.add(developmentStartStatuses.status_class);
    developmentStartBadge.textContent = developmentStartStatuses.status_text;
    //date
    var development_started_date = button.getAttribute('data-development_started_date')
    developmentStart.setAttribute("data-date", development_started_date)
    //info
    var development_started_info = button.getAttribute('data-development_started_info')
    var developmentStartInfo = developmentStart.querySelector("p");
    developmentStartInfo.innerHTML = development_started_info;

    //development End
    //status
    var developmentEnd = jobsModal.querySelector('.development-end')
    var development_ended_status = button.getAttribute('data-development_ended_status')
    var developmentEndBadge = developmentEnd.querySelector("span.badge");
    var developmentEndStatuses = getStatus(developmentEndBadge, development_ended_status);
    developmentEnd.classList.add(developmentEndStatuses.status_liClass);
    developmentEndBadge.classList.add(developmentEndStatuses.status_class);
    developmentEndBadge.textContent = developmentEndStatuses.status_text;
    //date
    var development_ended_date = button.getAttribute('data-development_ended_date')
    developmentEnd.setAttribute("data-date", development_ended_date)
    //info
    var development_ended_info = button.getAttribute('data-development_ended_info')
    var developmentEndInfo = developmentEnd.querySelector("p");
    developmentEndInfo.innerHTML = development_ended_info;
    //signed date
    var developmentEndSigned = developmentEnd.querySelector("div > span")
    var development_ended_approved_date = button.getAttribute('data-development_ended_approved_date')
    developmentEndSigned.innerHTML = development_ended_approved_date;
    //link
    var developmentEndLink = developmentEnd.querySelector("a")
    var development_ended_link = button.getAttribute('data-development_ended_link')
    developmentEndLink.href = development_ended_link

    //final_payment 
    //status
    var final_payment = jobsModal.querySelector('.final-payment')
    var final_payment_status = button.getAttribute('data-final_payment_status')
    var final_paymentBadge = final_payment.querySelector("span.badge");
    var final_paymentStatuses = getStatus(final_paymentBadge, final_payment_status);
    final_payment.classList.add(final_paymentStatuses.status_liClass);
    final_paymentBadge.classList.add(final_paymentStatuses.status_class);
    final_paymentBadge.textContent = final_paymentStatuses.status_text;
    //date
    var final_payment_date = button.getAttribute('data-final_payment_date')
    final_payment.setAttribute("data-date", final_payment_date)
    //info
    var final_payment_info = button.getAttribute('data-final_payment_info')
    var final_paymentInfo = final_payment.querySelector("p");
    final_paymentInfo.innerHTML = final_payment_info;

    //download links
    //status
    var download = jobsModal.querySelector('.downloads')
    var download_status = button.getAttribute('data-download_status')
    var downloadBadge = download.querySelector("span.badge");
    var downloadStatuses = getStatus(downloadBadge, download_status);
    download.classList.add(downloadStatuses.status_liClass);
    downloadBadge.classList.add(downloadStatuses.status_class);
    downloadBadge.textContent = downloadStatuses.status_text;
    //date
    var download_date = button.getAttribute('data-download_date')
    download.setAttribute("data-date", download_date)
    //info
    var download_info = button.getAttribute('data-download_info')
    var downloadInfo = download.querySelector("p");
    downloadInfo.innerHTML = download_info;
    //link
    var downloadLinks = download.querySelector("a")
    var download_links = button.getAttribute('data-download_links')
    // if (download_links) {
    //     downloadLinksList = download_links.split(',');
    //     for (var i = 0; i < downloadLinksList.length; i++) {
    //        console.log(downloadLinksList)
    //         var Links = parse_name((downloadLinksList).toString())
    //         var title =  Links.title
    //         var link = Links.link
    //         console.log(title + ' '+ link)
    //     }

    //  }
    downloadLinks.href = download_links

})