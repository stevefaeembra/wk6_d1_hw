[Ep. 1] expect "The murderer is Miss Scarlet". scenario is in scope inside the function. [Correct!]

[Ep. 2] can't change the const murderer, expect an error. [Correct! TypeError: Assignment to constant variable.] Also showed up in linter as an error.

[Ep. 3] Expect it to say 'Mrs Peacock' for first and 'Mr Plum for second.' [Correct!]

[Ep. 4] Expect declare_all_suspects to show Scarlet, Plum and Mustard. Then suspect_three reverts to Mrs. Peacock. [Correct!]

[ep. 5] Although scenario is const, we can modify it (just not reassign it). So we get "The weapon is the revolver" [correct!]

[ep. 6] The murderer is 'Mrs White' (the plot twist applied after changing murderer to Mr Green). [Correct!]

[ep. 7] The murderer is Miss Scarlet. plot_twist(), then unexpected_outcome() [WRONG - Mr Green. Reason is that the other changes are LETs so they don't exist outside the functions they are declared in.]

[ep. 8] The weapon is candle stick. [Correct!]

[ep. 9] Expect professor plum, as the let will only be in scope of the function. [Correct!]
