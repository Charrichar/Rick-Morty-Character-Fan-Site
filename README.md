Technologies used in this project include HTML, CSS, JAVASCRIPT, & JQUERY, & RICK&MORTY API.

APPROACH TAKEN FOR THE PROJECT WAS TO CREATE A RICK&MORTY SUPERFAN CHARACTER INDEX SITE.

BEING AS THOUGH API RESULTS WERE PAGINATED, THE API WAS CALLED SEVERAL TIMES (30+)

THE SITE INCLUDES 600+
CHARACTER ICONS OVER A FIXED BACKGROUND FROM THE SHOW'S 4TH SEASON
THE BACKGROUND IMAGE HAS SEVERAL PROPERTIES THAT ALLOW IT TO

1. COVER THE WIDTH & HEIGHT OF THE ENTIRE SCREEN
2. STAY IN A CENTERED FIXED POSITION
3. GIVE A SLIDING EFFECT/FEEL WHEN THE PAGE IS SCROLLED

THE BACKGROUND IMAGE CONTAINS A Z-INDEX OF
-1 FOR IT TO BE DISPLAYED BEHIND THE IMAGE ICONS AND LOGO

Z-INDEX ASSIGNMENT TO
OTHER ELEMENTS PROVED
TO BE PROBLEMATIC

UNITS OF MEASURE CHOSEN FOR THE BACKGROUND WERE VW &
VH

ICONS ARE ANIMATED TO GROW DOUBLE THEIR SIZE ON HOVER AS WELL AS BORDER HIGHLIGHTING

THE ANIMATION FOR ICONS
INCLUDE A TRANSFORM SCALE TO 2 TIMES THE ORIGINAL SIZE ONCE HOVERED OVER
WITH A TRANSITION TIMING OF .4 SECONDS

THE SIZE OF THE ICONS ARE A FIXED PX AMOUNT
FOR THE PURPOSES OF RETAINING SIZE UPON
SCREEN RESIZING

THIS WAS CHOSEN OVER
THE STYLING OF WIDTH ON HOVER TO GIVE A LESS
GLITCHY FEEL IN THE TRANSITION AS WIDTH TRANSFORMATION WAS PUSHING OTHER ICON ELEMENTS OUT OF PLACE


BORDER COLOR WAS CHOSEN TO BE IN HARMONY WITH THE COLOR SCHEME OF THE PAGE'S LOGO

ON CLICK THERE IS A THEMATIC MODAL WITH
A LINEAR GRADIENT BACKGROUND WHICH GOES FROM BOTTOM TO TOP STARTING IN MAROON AND BLENDING INTO BLACK. THESE COLOR WERE CHOSEN TO BE IN COHESION WITH THE DECIDED BACKGROUND IMAGE. APPROPRIATE TYPE TO FIT THE TYPOGRAPHIC THEME
ELEMENT OF THE SHOW,

'SHADOWS INTO LIGHT'



WITH A SLIGHTLY OFF CURSIVE TYPE FONT FOR THE CLOSE BUTTON TO RELATE TO THE TYPOGRAPHY OF THE MODAL BUT DISTINGUISH ITSELF APART FROM THE DISPLAYED INFO AS A SEPARATE ELEMENT WHICH HAS FUNCTIONALITY

PACIFICO

MODAL WIDHT AND HEIGHT IS A PERCENTAGE AMOUNT
FOR INTERACTIVE DESIGN

IT IS ALSO A FLEXBOX ITEM WITH A DIRECTION OF COLUMN AND JUSTIFIED AS SPACE BETWEEN FOR THE CONTENT

MODAL OUTER AND INNER BORDER COLOR COMBINATION CHOSEN TO STAY IN COHESION WITH THE GRADIENT BACKGROUND

ALL INTERACTIVE ELEMENTS ON PAGE DISPLAY A CURSOR OF POINTER WHEN HOVERED OVER TO REPRESENT THEMSELVES AS SUCH


ROAD BLOCKS:

INITIAL BLOCK ON API PAGINATION CHARACTER AMOUNT

DISCONNECT OF THINKING FOR MODAL LOGIC

UNRESOLVED:
SEARCH FUNCTIONALITY

COUNTRIBUTORS:
DOUG MOURERIA

NOLO MARSH

DANISH VERANI


MENTIONS:

DUSTIN BURNS

KRISTIAN REYES

NOTABLE RESOURCES:
WYZANT

TEACHERON

TECHNOLOGIES TO MENTION:

GRAPHQL
