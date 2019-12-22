// On the line that imports from @storybook/vue, add getStorybook and setAddon
import { configure, getStorybook, setAddon } from '@storybook/vue';
const { percyAddon, serializeStories } = createPercyAddon();
setAddon(percyAddon);
// NOTE: if you're using the Storybook options addon, call serializeStories *BEFORE* the setOptions call
serializeStories(getStorybook);
