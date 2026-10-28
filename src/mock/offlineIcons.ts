import { addCollection } from '@iconify/react'
import collections from './icons.json'

// Register every icon the app uses so nothing is fetched from the Iconify API.
;(collections as any[]).forEach(c => addCollection(c))
