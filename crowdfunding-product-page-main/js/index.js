const bookmarkButton = $(".bookmark");
const checkbox = $(".checkbox");
const completeModal = $("#completeModal");
const continueButton = $("#modal .card-footer button");
const inputPledge = $("#modal input");
const mainCard = $("main .card");
const modal = $("#modal");
const modalCard = $("#modal .card");
const modalCardFooter = $("#modal .card-footer");
const remain = $("main span");
const selectRewardButton = $("main button");
const selectRewardModal = $("#modal .card-header button");

function CheckBookmark() {
    bookmarkButton.toggleClass("active");
    if (bookmarkButton.hasClass("active")) {
        bookmarkButton.text("Bookmarked");
    }
    else {
        bookmarkButton.text("Bookmark");
    }
    changeBookmarkButton();
}

function ChoosePledgeInModal(index) {
    checkbox.removeClass("active");
    checkbox.eq(index).addClass("active");

    modalCardFooter.hide();
    modalCardFooter.eq(index).show();
}

function CloseModal() {
    modal.modal("hide");
}

function CloseCompleteModal() {
    completeModal.modal("hide");
}

function GetNumberOnly(event) {
    if ((event.which != 46 || $(this).val().indexOf('.') != -1) && (event.which < 48 || event.which > 57)) {
      event.preventDefault();
    }
  }

function OpenModal() {
    modal.modal("show");
}

function OpenCompleteModal() {
    completeModal.modal("show");
}

for (let i = 0; i < remain.length; i++) {
    if (remain.eq(i).text() === "0") {
        mainCard.eq(i).addClass("out-of-stock");
        selectRewardButton.eq(i).text("Out of stock").attr("disabled", true);

        modalCard.eq(i + 1).addClass("out-of-stock");
        selectRewardModal.eq(i + 1).attr("disabled", true);
        checkbox.eq(i + 1).attr("disabled", true);
    }
}

function ChangeBookmarkButton() {
    if ($(window).width() <= 375) {
        bookmarkButton.text("");
    }
    else {
        if (bookmarkButton.hasClass("active")) {
            bookmarkButton.text("Bookmarked");
        }
        else {
            bookmarkButton.text("Bookmark");
        }
    }
}

ChangeBookmarkButton();
$(window).resize(ChangeBookmarkButton);

// modalCardFooter.hide();

selectRewardButton.click(function() {
    ChoosePledgeInModal(selectRewardButton.index($(this)) + 1);
});

selectRewardModal.click(function() {
    ChoosePledgeInModal(selectRewardModal.index($(this)));
});

checkbox.click(function() {
    ChoosePledgeInModal(checkbox.index($(this)));
});

inputPledge.keypress(GetNumberOnly);

continueButton.click(CloseModal);