$(function() {
    $(".submit").on("click", (e) => {
        e.preventDefault();
        const newBurger = {
            burgerName: $(".burgerName").val().trim(),
            devour: 1
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(() => {
            console.log("created new burger");
            location.reload();
        });
    });

    $(".change-devour").on("click", (e) => {
        const id = $(e.target).data("id");
        const newDevour = $(e.target).data("newdevour");

        const newDevourState = {
            devour: newDevour
        };
        $.ajax("/api/burgers/"+id, {
            type: "PUT",
            data: newDevourState
        }).then(() => {
            console.log("changed devour to ", newDevourState);
            location.reload();
        });
    });


});