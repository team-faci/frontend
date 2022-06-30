import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faChevronRight, faPenToSquare, faPlus, faTrashCan} from '@fortawesome/free-solid-svg-icons';
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import ListGroup from "react-bootstrap/ListGroup";

// Mock function to simulate an API call
async function getContact(contactId) {
  const value = {
    "firstName": "Alice",
    "lastName": "Young",
    "email": "email@example.com",
    "phoneNo": "111-222-3333",
    "title": "Software Engineer",
    "notes": `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vestibulum leo augue, eu consequat ligula fermentum at. Integer tempor a metus malesuada dictum. Sed eget lacinia diam. Nam blandit mi sit amet iaculis posuere. Nullam eget erat in lorem ultricies gravida. In gravida dapibus nisl. Donec id urna luctus, auctor justo sed, feugiat nunc. Proin maximus enim a nunc condimentum auctor. Etiam tortor massa, tincidunt vel rutrum vitae, hendrerit ac magna. Nam ac turpis feugiat, fringilla nisi ut, venenatis risus.
    `,
  };

  return new Promise((resolve) => {
    setTimeout(() => resolve(value), 500);
  });
}

// Mock function to simulate an API call
async function getEvents(contactId) {
  const value = [
    {
      "eventId": 1,
      "date": "15/09/2020",
      "name": "First Meeting",
      "location": "Zoom",
      "notes": `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in varius mi, non interdum felis. Sed elementum ante vel enim pulvinar, vitae ornare metus pretium. Vivamus vestibulum erat convallis eros dapibus volutpat. Quisque consectetur lectus augue, eu pulvinar ipsum imperdiet eget. Vestibulum sit amet nulla consequat, ullamcorper libero eu, luctus odio. In in ex mollis, tincidunt felis a, condimentum libero. Aliquam at condimentum odio, sed mattis tellus. Curabitur lobortis consectetur mattis. Proin lacinia efficitur accumsan. Aliquam tortor nulla, euismod nec mi sodales, fermentum varius lectus. Ut venenatis nunc sed felis malesuada convallis.

        Nunc tincidunt laoreet ex, at dictum justo venenatis quis. Integer pretium feugiat laoreet. Vivamus id accumsan dui. Proin ultricies dapibus mollis. Sed odio orci, dignissim ac libero ut, laoreet pellentesque erat. Fusce id quam rutrum, fermentum lectus et, eleifend neque. Ut mattis consectetur magna id rhoncus. In hac habitasse platea dictumst. Nam eget elit id libero pulvinar vulputate et pretium mi. Ut in congue mi, sed pulvinar justo. Sed tristique tincidunt velit eu sagittis. Nulla nec vulputate eros, et laoreet urna. Ut elementum facilisis interdum. Pellentesque rutrum euismod nunc, a sagittis odio tempor non. Aenean vehicula, orci in tincidunt rhoncus, arcu odio lobortis est, eget mollis dolor dui id nisl.
        
        Nam nec dui sodales, condimentum mauris vitae, auctor orci. Quisque venenatis turpis fermentum tellus aliquet venenatis. Fusce lectus ipsum, rutrum nec eleifend nec, pellentesque eu urna. Nulla suscipit mattis enim ac hendrerit. Integer consectetur neque justo, id ultricies metus elementum et. Proin ut nibh at ex ornare maximus at sed justo. Nullam tincidunt dolor ex. Nulla a nisi in risus aliquet laoreet in in odio. Suspendisse potenti.
        
        Vivamus lacinia lorem sed bibendum ornare. Curabitur vitae rhoncus est, id varius magna. Maecenas bibendum vel elit non pellentesque. Etiam mi metus, feugiat a lacinia ut, porta id urna. Mauris vitae fermentum turpis. Integer placerat, sapien eget pretium iaculis, magna justo facilisis velit, at pharetra nisi libero ac tortor. Mauris eros mi, convallis molestie metus at, posuere venenatis dui. Maecenas quis finibus augue, a interdum dui. Nam a dapibus orci. Vestibulum a dui porta, congue nunc vitae, consequat enim. Nullam vehicula sodales elementum. Curabitur euismod mauris non dolor dapibus, a ornare libero sollicitudin. Sed sed tristique diam. Donec pharetra justo felis, quis porttitor metus tristique a.
        
        Nulla quis fringilla arcu. Mauris sagittis leo leo, a cursus augue tincidunt sed. Nulla vel turpis in est mattis iaculis. Sed condimentum eros tortor, et facilisis mauris sollicitudin ac. Sed in dolor tempus, vehicula nibh eget, interdum sapien. Integer porta nulla urna, eget placerat dolor porta molestie. Suspendisse mollis orci in orci consequat porttitor. Vestibulum sodales accumsan sapien in tristique. Quisque blandit lacus dignissim ante faucibus faucibus. Donec mattis, urna ut laoreet pharetra, velit est posuere ante, et sodales justo nibh eu dolor. Nullam justo tellus, iaculis ac laoreet id, gravida id felis. Vestibulum feugiat augue a consectetur fermentum. Nullam scelerisque ipsum id lobortis ultricies. Pellentesque eu ligula diam. Proin mattis, ex nec sodales finibus, eros mi consectetur nibh, nec pretium metus magna volutpat urna.
      `,
    },
    {
      "eventId": 2,
      "date": "25/10/2020",
      "name": "Second Meeting",
      "location": "Zoom",
      "notes": `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt blandit arcu a vehicula. Aenean accumsan magna nibh, id ornare diam tincidunt sit amet. Suspendisse sodales dolor placerat, consequat purus vitae, faucibus eros. Etiam nec mauris et augue vehicula ultrices. Suspendisse efficitur, velit sed porttitor pharetra, est risus venenatis nisi, eget consectetur nulla nisi at lectus. Sed in dui id metus interdum posuere. Vivamus eu erat mattis, ullamcorper turpis volutpat, suscipit erat.
        
        Aenean consectetur quis magna non cursus. Aenean consequat pretium quam vitae interdum. Nullam pretium, massa id interdum egestas, turpis nibh vestibulum nunc, et vestibulum velit metus vel mi. Suspendisse euismod est elit, et tristique ipsum vestibulum at. Proin non aliquet velit. Donec convallis nisl ligula, eu ultrices risus pretium in. Donec dapibus tempor dictum. Suspendisse eu dui non elit consequat luctus. Duis iaculis dapibus commodo.
        
        Proin sit amet luctus est, at fermentum odio. Morbi ut nunc convallis, consequat diam in, imperdiet tortor. Donec a arcu eget est euismod cursus. Integer at eros commodo neque egestas viverra. Duis blandit lorem nec arcu sodales semper. Mauris egestas ullamcorper odio in efficitur. Duis lobortis dolor id felis tristique dignissim. Morbi suscipit ipsum et neque dignissim, eu vestibulum ante venenatis. Duis luctus nec mauris quis congue. Morbi tortor ex, pharetra non laoreet sit amet, fermentum vitae leo. Nullam tempor turpis enim, sed fermentum dui porttitor eu. Pellentesque sed sapien eget eros maximus ornare. Vestibulum sem metus, venenatis vitae bibendum ut, ornare et sem. Fusce quis leo gravida, pellentesque mi in, scelerisque dui. In posuere, dui vitae porta feugiat, nunc nibh ultrices eros, eu maximus neque mauris vitae ex.
        
        Quisque et feugiat arcu. Nam maximus nulla vel tortor congue lobortis. Ut hendrerit faucibus hendrerit. Mauris vel velit est. Curabitur ut magna felis. Proin non lectus in dui feugiat sagittis. Vestibulum ultricies congue accumsan. Maecenas et justo nec enim pulvinar commodo id vitae turpis. Duis neque elit, pretium quis elementum non, lacinia ac massa.      
      `,
    },
    {
      "eventId": 5,
      "name": "Third Meeting",
      "notes": `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt blandit arcu a vehicula. Aenean accumsan magna nibh, id ornare diam tincidunt sit amet. Suspendisse sodales dolor placerat, consequat purus vitae, faucibus eros. Etiam nec mauris et augue vehicula ultrices. Suspendisse efficitur, velit sed porttitor pharetra, est risus venenatis nisi, eget consectetur nulla nisi at lectus. Sed in dui id metus interdum posuere. Vivamus eu erat mattis, ullamcorper turpis volutpat, suscipit erat.
        
        Aenean consectetur quis magna non cursus. Aenean consequat pretium quam vitae interdum. Nullam pretium, massa id interdum egestas, turpis nibh vestibulum nunc, et vestibulum velit metus vel mi. Suspendisse euismod est elit, et tristique ipsum vestibulum at. Proin non aliquet velit. Donec convallis nisl ligula, eu ultrices risus pretium in. Donec dapibus tempor dictum. Suspendisse eu dui non elit consequat luctus. Duis iaculis dapibus commodo.
        
        Proin sit amet luctus est, at fermentum odio. Morbi ut nunc convallis, consequat diam in, imperdiet tortor. Donec a arcu eget est euismod cursus. Integer at eros commodo neque egestas viverra. Duis blandit lorem nec arcu sodales semper. Mauris egestas ullamcorper odio in efficitur. Duis lobortis dolor id felis tristique dignissim. Morbi suscipit ipsum et neque dignissim, eu vestibulum ante venenatis. Duis luctus nec mauris quis congue. Morbi tortor ex, pharetra non laoreet sit amet, fermentum vitae leo. Nullam tempor turpis enim, sed fermentum dui porttitor eu. Pellentesque sed sapien eget eros maximus ornare. Vestibulum sem metus, venenatis vitae bibendum ut, ornare et sem. Fusce quis leo gravida, pellentesque mi in, scelerisque dui. In posuere, dui vitae porta feugiat, nunc nibh ultrices eros, eu maximus neque mauris vitae ex.
        
        Quisque et feugiat arcu. Nam maximus nulla vel tortor congue lobortis. Ut hendrerit faucibus hendrerit. Mauris vel velit est. Curabitur ut magna felis. Proin non lectus in dui feugiat sagittis. Vestibulum ultricies congue accumsan. Maecenas et justo nec enim pulvinar commodo id vitae turpis. Duis neque elit, pretium quis elementum non, lacinia ac massa.      
      `,
    },
  ];

  return new Promise((resolve) => {
    setTimeout(() => resolve(value), 900);
  });
}

export function ViewContactPage() {
  const params = useParams();
  const [contact, setContact] = useState();
  const [events, setEvents] = useState();

  useEffect(() => {
    getContact(params.contactId)
      .then((contact) => {
        setContact(contact);
      })
      .catch(() => {
        // TODO: handle contact not found
      });
  }, []);

  useEffect(() => {
    getEvents(params.contactId)
      .then((events) => {
        setEvents(events);
      })
      .catch(() => {
        // TODO: handle contact not found
      });
  }, []);

  return (
    <Row>
      <Col>
        <Contact contact={contact}/>
      </Col>
      <hr className="my-1"/>
      <Col className="py-4">
        <h3>Events</h3>
        <Button className="my-2">
          <FontAwesomeIcon icon={faPlus} className="me-2" />
          Add new event
        </Button>
        <EventsList events={events}/>
      </Col>
    </Row>
  );
}

function Contact({contact}) {
  return (
    contact &&
    <>
      <div className="d-flex gap-2">
        <h3 className="flex-grow-1">{`${contact.firstName} ${contact.lastName}`}</h3>
        <Button>
          <FontAwesomeIcon icon={faPenToSquare}/>
        </Button>
        <Button>
          <FontAwesomeIcon icon={faTrashCan}/>
        </Button>
      </div>
      <h5 className="text-muted">{contact.title}</h5>
      {
        contact.email &&
        <h6 className="text-muted">
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </h6>
      }
      {
        contact.linkedin &&
        <h6 className="text-muted">
          <a href={contact.linkedin}>
            {contact.linkedin}
          </a>
        </h6>
      }
      {contact.phoneNo && <h6 className="text-muted">{contact.phoneNo}</h6>}

      <p>{contact.notes}</p>
    </>
  );
}

function EventsList({events}) {
  return (
    events &&
    events.map((event) => {
      return <Event key={event.eventId} event={event}/>
    })
  );
}

function Event({event}) {
  const [notesOpen, setNotesOpen] = useState(false);

  return (
    <Card className="my-1">
      <Card.Body>
        <Card.Title>{event.name}</Card.Title>
        {event.date && <Card.Subtitle className="text-muted my-1">{event.date}</Card.Subtitle>}
        {event.location && <Card.Subtitle className="text-muted my-1">{event.location}</Card.Subtitle>}
        <ListGroup className="mt-3">
          <ListGroup.Item action className="bg-light" onClick={() => setNotesOpen(!notesOpen)}>
            <FontAwesomeIcon icon={notesOpen ? faChevronDown : faChevronRight} className="me-2" />
            <b>My Notes</b>
          </ListGroup.Item>
          <Collapse in={notesOpen}>
            <ListGroup.Item>
              {event.notes}
            </ListGroup.Item>
          </Collapse>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}