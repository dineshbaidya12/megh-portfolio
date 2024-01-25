// ----------- Preloader ----------------
let percentage = 0;
const loadingPercentageElement = $('#loadingPercentage');
const loadingContentElement = $('#loadingContent');

function updatePercentage() {
    if (percentage < 80) {
        setTimeout(() => {
            percentage += 12;
            loadingPercentageElement.html(percentage + '%');
            updatePercentage();
        }, 900);
    }
}

updatePercentage();

// ----------- Preloader ----------------

$(document).ready(function () {
    // $('#lets-talk-btn').on('click', function () {
    //     $('#lets-talk-btn').html('<img src="assets/images/loading.gif" class="laoding-img">');
    // });
    // $(document).on('click', function () {
    //     $('.navlink-responsive').removeClass('show');
    //     $('#more-btn').removeClass('active');
    // });
    $('.dark-body').addClass('scrollable');
    loadingPercentageElement.html('100%');
    $('#loadingPercentage').attr('id', 'chnage');
    setTimeout(() => {
        $('.preloader').fadeOut();
    }, 1);

    $('#body-content').on('click', function () {
        $('#more-btn').removeClass('active');
        setTimeout(() => {
            $('.navlink-responsive').removeClass('show');
        }, 50);
    });

    $('#more-btn').on('click', function (e) {
        $('#more-btn').toggleClass('active');
        $('.navlink-responsive').css('display', 'block');
        setTimeout(() => {
            $('.navlink-responsive').toggleClass('show');
        }, 50);
    });
    $('[data-toggle="tooltip"]').tooltip();
});

