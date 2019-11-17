import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Collapse from "@material-ui/core/Collapse";

export default function Content() {
    return(
        <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Back to the Future is a 1985 American science fiction film directed
            by Robert Zemeckis and written by Zemeckis and Bob Gale. It stars
            Michael J. Fox as teenager Marty McFly, who accidentally travels
            back in time from 1985 to 1955, where he meets his future parents
            and becomes his mother's romantic interest. Christopher Lloyd
            portrays the eccentric scientist Dr. Emmett "Doc" Brown, inventor of
            the time-traveling DeLorean, who helps Marty repair history and
            return to 1985. The cast also includes Lea Thompson as Marty's
            mother Lorraine, Crispin Glover as his father George, and Thomas F.
            Wilson as Biff Tannen, Marty and George's arch-nemesis.
          </Typography>
          <Typography paragraph>
            Zemeckis and Gale wrote the script after Gale wondered whether he
            would have befriended his father if they had attended school
            together. Film studios rejected it until the financial success of
            Zemeckis' Romancing the Stone. Zemeckis approached Steven Spielberg,
            who agreed to produce the project at Amblin Entertainment, with
            Universal Pictures as distributor. Fox was the first choice to play
            Marty, but he was busy filming his television series Family Ties,
            and Eric Stoltz was cast; after the filmmakers decided he was wrong
            for the role, a deal was struck to allow Fox to film Back to the
            Future without interrupting his television schedule.
          </Typography>
        </CardContent>
      </Collapse>
    )
}
