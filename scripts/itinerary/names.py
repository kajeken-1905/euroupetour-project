"""Name matching shared by geo_wikidata.py and geo_verify.py."""
import re, unicodedata

STOP = {'the', 'of', 'de', 'la', 'le', 'du', 'des', 'di', 'del', 'della', 'and', 'in', 'a', 'an', 'at', 'on', 's'}
GENERIC = {'st', 'san', 'santa', 'saint', 'museum', 'church', 'cathedral', 'square', 'old', 'town', 'castle',
           'palace', 'park', 'market', 'bridge', 'tower', 'city', 'national', 'monastery', 'garden', 'gardens',
           'hall', 'street', 'house', 'lake', 'fortress', 'new', 'main', 'central', 'royal', 'viewpoint', 'beach',
           'harbour', 'harbor', 'port', 'quarter', 'district', 'centre', 'center', 'historic', 'gate', 'walls', 'wall'}
# Words that recur from town to town; a name made only of these is "plain" and must stay near its city.
COMMON = GENERIC | {'bazaar', 'hill', 'river', 'riverside', 'promenade', 'waterfront', 'station', 'theatre', 'theater',
                    'opera', 'library', 'university', 'gallery', 'art', 'history', 'village', 'island', 'bay', 'fort',
                    'basilica', 'chapel', 'abbey', 'mosque', 'synagogue', 'fountain', 'monument', 'memorial', 'zoo',
                    'aquarium', 'botanical', 'cemetery', 'citadel', 'ruins', 'roman', 'medieval', 'great', 'grand',
                    'little', 'upper', 'lower', 'avenue', 'boulevard', 'plaza', 'piazza', 'place', 'platz', 'cable',
                    'car', 'funicular', 'lighthouse', 'pier', 'falls', 'waterfall', 'cave', 'caves', 'mine', 'valley',
                    'gorge', 'mountain', 'view', 'lookout', 'walk', 'bath', 'baths', 'mill', 'clock', 'state'}


def words(s):
    s = unicodedata.normalize('NFKD', s).encode('ascii', 'ignore').decode().lower()
    return set(re.findall(r'[a-z0-9]+', s)) - STOP


def same_place(name, label, city):
    """The label must name the highlight itself, not the town around it or a neighbour that shares a word."""
    c = words(city)
    n, l = words(name) - c, words(label) - c
    if not n or not l:
        return False
    if n == l:
        return True
    ns, ls = n - GENERIC, l - GENERIC
    if not ns or not ls:
        return False
    # "Great Meteoron" ~ "Monastery of Great Meteoron"; a single shared word ("Westminster") is not enough.
    return ns == ls or (min(len(ns), len(ls)) >= 2 and (ns <= ls or ls <= ns))


def plain(names, city):
    return not all(words(n) - words(city) - COMMON for n in names)
